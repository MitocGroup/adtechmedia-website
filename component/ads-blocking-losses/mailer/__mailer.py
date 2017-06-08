import boto3
import re
import os
from hashlib import md5
from time import time, sleep
from mailchimp3 import MailChimp

__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

__subject_template = open(os.path.join(__location__, 'subject.template'), 'r')
__body_template = open(os.path.join(__location__, 'body.template'), 'r')


def ses_send(email_from, email_to, subject_params={}, body_params={}):
    """
    Send email through AWS SES
    :type email_from str
    :type email_to str
    :type subject_params dict
    :type body_params dict
    :param email_from:
    :param email_to:
    :param subject_params: Email subject params for template
    :param body_params: Email body text params for template
    :return:
    """

    subject = __build_template(__subject_template, subject_params)
    body = __build_template(__body_template, body_params)

    boto3.client('ses').send_email(
        Source=email_from,
        Destination={
            'ToAddresses': [
                email_to,
            ],
        },
        Message={
            'Subject': {
                'Data': subject
            },
            'Body': {
                'Text': {
                    'Data': body
                }
            }
        }
    )


def mailchimp_send(conf, email_from, email_to, merge_fields={}):
    """
    Send email through Mailchimp API
    :type conf dict
    :type email_to str
    :type email_from str
    :type subject_params dict
    :type body_params dict
    :param conf: {'mailchimp.username': username, 'mailchimp.secret_key': key, 'mailchimp.list': id} - Mailchimp parameters
    :param email_from:
    :param email_to:
    :param subject_params:
    :param body_params:
    :return:
    """

    client = MailChimp(conf['mailchimp.username'], conf['mailchimp.secret_key'])
    list = client.lists.get(conf['mailchimp.list'])
    subscriber_hash = md5(email_to.lower()).hexdigest()

    member = client.lists.members.create_or_update(
        list_id=list['id'],
        subscriber_hash=subscriber_hash,
        data={
            'email_address': email_to,
            'merge_fields': merge_fields,
            'status': 'subscribed',
            'status_if_new': 'subscribed',
        }
    )

    segment = client.lists.segments.create(
        list_id=list['id'],
        data={
            'name': member['email_address'],
            'static_segment': [member['email_address']]
        }
    )

    campaign = client.campaigns.create({
        'type': 'regular',
        'recipients': {
            'list_id': list['id'],
            'segment_opts': {
                'saved_segment_id': segment['id']
            }
        },
        'settings': {
            'subject_line': '[REPORT] "*|WEBSITE|*"  ads blocking losses estimation',
            'template_id': conf['mailchimp.template'],
            'from_name': 'AdTechMedia.io',
            'reply_to': email_from,
            'to_name': merge_fields['FULL_NAME'] if merge_fields.get('FULL_NAME', '').strip() else email_to,
            'title': 'Losses Calculator ATM #' + email_to
        }
    })

    retries = 5
    while True:
        try:
            client.campaigns.actions.send(campaign['id'])
            retries = 0
            break
        except Exception as e:
            if not retries:
                raise e

            retries -= 1
            sleep(5)

    retries = 5
    while True:
        try:
            client.campaigns.delete(campaign['id'])
            retries = 0
            break
        except Exception as e:
            if not retries:
                raise e

            retries -= 1
            sleep(5)

    client.lists.segments.delete(list_id=list['id'], segment_id=str(segment['id']))


def __build_template(template, template_params={}):
    """
    :type template file
    :type template_params dict
    :param template:
    :param template_params:
    :return:
    """

    compiled_pattern = re.compile(r'.*\{\{\s*(.*)\s*\}\}.*')

    template_build = ''
    for line in template:
        matched = compiled_pattern.match(line)
        while matched:
            param = matched.group(1)
            if param not in template_params:
                raise KeyError("""No '%s' parameter in params list called.""" % param)

            pattern = r"""\{\{\s*%s\s*\}\}""" % param
            line = re.sub(pattern, str(template_params[param]), line)
            matched = compiled_pattern.match(line)
        template_build += line

    return template_build
