import json
import os
import time
import yaml
import boto3
import validators
import decimal
import mailer
from urlparse import urlparse, parse_qs

__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

config = yaml.load(open(os.path.join(__location__, 'config.yml'), 'r'))
dynamodb = boto3.resource('dynamodb')


def losses_calculator(event, context):
    """
    AWS Lambda handler
    :param event:
    :param context:
    :return:
    """

    # Handle request parameters
    if event['body']:
        parameters = parse_qs(event['body'])
        for key, value in parameters.iteritems():
            if len(value) == 1:
                parameters[key] = value.pop(0)
            else:
                del parameters[key]
    else:
        parameters = event.get('queryStringParameters', {})
    niches = __get_niche_list()

    # Validation
    try:
        website = parameters['website'].lower()
        website = """http://%s""" % website.lstrip('https://').lstrip('http://')
        if not validators.url(website):
            raise ValueError('website')
        website = urlparse(website).netloc

        niche = parameters['niche'].lower()
        if niche not in niches:
            raise ValueError('niche')

        page_views = int(parameters['page_views'])
        if page_views < 0:
            raise ValueError('page_views')

        email = parameters.get('email')
        if email and not validators.email(email):
            raise ValueError('email')
        elif not email:
            email = 'none'
        email.lower()

        full_name = parameters.get('full_name', ' ')

        ads_sections = int(parameters['ads_sections'])
        if ads_sections < 0:
            raise ValueError('ads_sections')

    except KeyError as e:
        return {
            "statusCode": 400,
            "body": """Missing parameter '%s'""" % e.message
        }
    except Exception as e:
        return {
            "statusCode": 400,
            "body": """Parameter '%s' validation error.""" % e.message
        }

    # Losses calculate
    ads_blocked = 30.0 / 100.0
    ctr = float(niches[niche]['CTR']) / 100
    cpc = float(niches[niche]['CPC'])
    losses = round(((page_views * ads_blocked) * ads_sections) * ctr * cpc, 2)

    # Save request
    timestamp = int(time.time() * 1000)
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    item = table.get_item(
        Key={
            'website': website,
            'email': email
        }
    ).get('Item')

    if item:
        table.update_item(
            Key={
                'website': website,
                'email': email
            },
            UpdateExpression="set full_name=:na, niche=:n, page_views=:p, ads_sections=:b, losses=:l, email_sent=:e, updated_at=:u",
            ExpressionAttributeValues={
                ':n': niche,
                ':p': page_views,
                ':b': ads_sections,
                ':l': "{0:.2f}".format(losses),
                ':u': timestamp,
                ':e': False,
                ':na': full_name,
            },
            ReturnValues="NONE"
        )
    else:
        table.put_item(
            Item={
                'website': website,
                'niche': niche,
                'page_views': page_views,
                'ads_sections': ads_sections,
                'losses': "{0:.2f}".format(losses),
                'email': email,
                'full_name': full_name,
                'email_sent': False,
                'created_at': timestamp,
                'updated_at': timestamp,
            }
        )

    if email != 'none':
        mailer.send(
            email_from=config['parameters']['mailer.send_from'],
            email_to=email,
            subject_params={
                'website': website
            },
            body_params={
                'full_name': full_name,
                'losses': "{0:.2f}".format(losses),
            }
        )

    return {
        "statusCode": 200,
        "body": "{0:.2f}".format(losses)
    }


def niches_list(event, context):
    """
    AWS Lambda handler
    :param event:
    :param context:
    :return:
    """

    return {
        "statusCode": 200,
        "body": json.dumps({'niches': __get_niche_list().keys()})
    }


def __get_niche_list():
    """
    :rtype dict
    :return: {"niche/industry": "cpc"}
    """

    with open('niches.yml') as file:
        list = yaml.load(file)

    lower_case = {}
    for niche, data in list.iteritems():
        lower_case[niche.lower()] = data

    del list

    return lower_case

