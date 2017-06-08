import json
import os
import time
import yaml
import boto3
import validators
import uuid
import mailer
from urlparse import urlparse, parse_qs

__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
__config = yaml.load(open(os.path.join(__location__, 'config.yml'), 'r'))
__dynamodb = boto3.resource('dynamodb')

EMAIL_NONE = 'none'


def losses_calculator(event, context):
    """
    :param event:
    :param context:
    :return:
    """

    # Handle request parameters
    parameters = __handle_request_parameters(event)

    # Save request
    timestamp = int(time.time() * 1000)
    table = __dynamodb.Table(os.environ['DYNAMODB_TABLE'])
    table_item = {}

    if parameters.get('id'):
        id = parameters['id']
        table_item = table.get_item(Key={'id': id}).get('Item')

        if parameters.get('email') \
                and table_item.get('email') \
                and table_item['email'] == EMAIL_NONE:

            # Save user email
            email = parameters.get('email').lower()
            if not validators.email(email):
                return {
                    "statusCode": 400,
                    "body": "Parameter 'email' validation error."
                }

            table_item['email'] = email
            table.update_item(
                Key={
                    'id': id,
                },
                UpdateExpression="set full_name=:na, email=:e, updated_at=:u",
                ExpressionAttributeValues={
                    ':u': timestamp,
                    ':e': email,
                    ':na': parameters.get('full_name', ' '),
                },
                ReturnValues="NONE"
            )
        else:
            table_item['email'] = None

    elif not parameters.get('id'):
        # Save new user
        niches = __get_niche_list()

        # Validation
        try:
            website = parameters['website'].lower()
            website = """http://%s""" % website.lstrip('https://').lstrip('http://')
            if validators.url(website):
                website = urlparse(website).netloc
            else:
                website = website.lstrip('http://')

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
                email = EMAIL_NONE
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
        losses = __calculate_losses(niche, page_views, ads_sections)

        id = str(uuid.uuid4().fields[-1])[:16]
        while table.get_item(Key={'id': id}).get('Item'):
            # Assume unique id
            id = str(uuid.uuid4().fields[-1])[:12]

        table_item = {
            'id': id,
            'website': website,
            'niche': niche,
            'page_views': page_views,
            'ads_sections': ads_sections,
            'losses': "{0:.2f}".format(losses),
            'email': email,
            'full_name': full_name,
            'created_at': timestamp,
            'updated_at': timestamp,
        }

        table.put_item(
            Item=table_item
        )

    # Email sending
    email = table_item.get('email')

    if table_item and email and email != EMAIL_NONE:
        if __config['parameters']['mailer.service'] == 'mailchimp':
            merge_fields = {
                'WEBSITE': table_item['website'],
                'LOSSES': table_item['losses'],
                'INDUSTRY': table_item['niche'],
                'PAGE_VIEWS': str(table_item['page_views']),
                'AD_SLOTS': str(table_item['ads_sections']),
            }

            # Fix mailchimp empty field exception
            if table_item.get('full_name', '').strip():
                merge_fields['FULL_NAME'] = table_item['full_name'],

            mailer.mailchimp_send(
                conf=__config['parameters'],
                email_from=__config['parameters']['mailer.send_from'],
                email_to=email,
                merge_fields=merge_fields
            )
        elif __config['parameters']['mailer.service'] == 'ses':
            mailer.ses_send(
                email_from=__config['parameters']['mailer.send_from'],
                email_to=email,
                subject_params={
                    'website': table_item['website']
                },
                body_params={
                    'full_name': table_item['full_name'],
                    'losses': "{0:.2f}".format(table_item['losses']),
                }
            )

    return {
        "statusCode": 200,
        "body": json.dumps({
            'losses': table_item.get('losses'),
            'id': table_item.get('id')
        }),
        "headers": {
            "Access-Control-Allow-Origin": "*",
        }
    }


def niches_list(event, context):
    """
    :param event:
    :param context:
    :return:
    """

    return {
        "statusCode": 200,
        "body": json.dumps({'niches': __get_niche_list().keys()}),
        "headers": {
            "Access-Control-Allow-Origin": "*",
        }
    }


def __calculate_losses(niche, page_views, ads_sections):
    """
    :type niche str
    :type page_views int
    :type ads_sections int
    :param niche:
    :param page_views:
    :param ads_sections:
    :return:
    """

    niches = __get_niche_list()
    ads_blocked = 30.0 / 100.0
    ctr = float(niches[niche]['CTR']) / 100
    cpc = float(niches[niche]['CPC'])
    losses = round(((page_views * ads_blocked) * ads_sections) * ctr * cpc, 2)

    return losses


def __handle_request_parameters(lambda_event):
    """
    :type lambda_event dict
    :rtype dict
    :param lambda_event:
    :return:
    """

    if lambda_event['body']:
        parameters = parse_qs(lambda_event['body'])
        for key, value in parameters.iteritems():
            if len(value) == 1:
                parameters[key] = value.pop(0)
            else:
                del parameters[key]
    else:
        parameters = lambda_event.get('queryStringParameters', {})

    return parameters


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

