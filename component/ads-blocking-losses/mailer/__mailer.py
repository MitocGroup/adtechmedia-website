import boto3
import re
import os

__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

__ses = boto3.client('ses')
__subject_template = open(os.path.join(__location__, 'subject.template'), 'r')
__body_template = open(os.path.join(__location__, 'body.template'), 'r')


def send(email_from, email_to, subject_params={}, body_params={}):
    """
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

    compiled_pattern = re.compile(r'.*\{\{\s*(.*)\s*\}\}.*')

    subject = ''
    for line in __subject_template:
        matched = compiled_pattern.match(line)
        while matched:
            param = matched.group(1)
            if param not in subject_params:
                raise KeyError("""No '%s' parameter in subject params list called.""" % param)

            pattern = r"""\{\{\s*%s\s*\}\}""" % param
            line = re.sub(pattern, str(subject_params[param]), line)
            matched = compiled_pattern.match(line)
        subject += line

    body = ''
    for line in __body_template:
        matched = compiled_pattern.match(line)
        while matched:
            param = matched.group(1)
            if param not in body_params:
                raise KeyError("""No '%s' parameter in body params list called.""" % param)

            pattern = r"""\{\{\s*%s\s*\}\}""" % param
            line = re.sub(pattern, str(body_params[param]), line)
            matched = compiled_pattern.match(line)
        body += line

    response = __ses.send_email(
        Source = email_from,
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