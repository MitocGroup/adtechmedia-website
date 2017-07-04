####  Calculate ads blocking losses

> **Note:**
> Ensure you have installed **npm** and **python 2.7**

Install *Serverless Framework* and plugin to automatically bundle dependencies:

    $ sudo npm install -g serverless
    $ npm install --save serverless-python-requirements


> **Note:**
> Before deploy you must create **config.yml** like the **config.yml.dist** and change the parameters.

To deploy the service - run the command:

    $ serverless deploy
   
 
#### Usage

After delpoy, you will get the endpoints to the API:

    ...
    endpoints:
    POST - https://xxx.execute-api.us-east-1.amazonaws.com/prod/calculator
    GET - https://xxx.execute-api.us-east-1.amazonaws.com/prod/niches
    ...

To get niches list supported, call your `https://xxx.execute-api.us-east-1.amazonaws.com/prod/niches` endpoint, response body will be in *json* format:

    {
	"niches": [
		"default",
		...
		]
	}

To calculate losses, call your `https://xxx.execute-api.us-east-1.amazonaws.com/prod/calculator` endpoint with query parameters:

 - **website**
 - **niche** - name from supported niches
 - **page_views** - website page views per month
 - **ads_sections** - ads sections on website
 - **email** - *optional*, send a report to the email
 - **full_name** - *optional*, included in the report
 - **id** - *optional*, you can update user request info with the id (late user email assign & send)

Response example:

    {
	"losses": "8.28",
	"id": "5371838316943"
	}

#### Mailchimp setup

To send email reports through Mailchimp service you must:

 1. Set parameter *mailer.service* to 'mailchimp' value.
 2. Create a new Mailchimp List, with those **merge fields**:
	 - FULL_NAME
	 - WEBSITE
	 - LOSSES
	 - PAGE_VIEWS
	 - AD_SLOTS
	 - INDUSTRY
 3. Get the List ID from list Settings -> List name and defaults and put in config.yml (mailchimp.list).
 4. Create new Mailchimp Template with the content block:


> Hi *|FULL_NAME|*,
>
> So you are losing *|LOSSES|* $ every month due to ad blocks?
> This is how we come up with this sum:
> “Nr of PV/month” * Rate = “Blocked page views”
> “Blocked page views” * “Ads Sections on page” = “Total ad Impressions”
> “Total ad Impressions” * “CTR” = “Ad Clicks”
> “Ad Clicks” * “Avg CPC” = “Ad Revenue losses”
>
> Learn how Ad Tech Media can help you to increase your revenue, schedule a demo and claim your earnings back.


 5. Get the Template ID from URL, like `https://xx.admin.mailchimp.com/templates/edit?id=304021` - 304021, and put it in config.yml
