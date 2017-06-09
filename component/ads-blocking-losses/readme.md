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

To get niches list supported, call your `https://xxx.execute-api.us-east-1.amazonaws.com/prod/niches` endpoint, response body will be in *json* format.

To calculate losses, call your `https://xxx.execute-api.us-east-1.amazonaws.com/prod/calculator` endpoint with query parameters:

 - **website**
 - **niche** - name from supported niches
 - **page_views** - website page views per month
 - **ads_sections** - ads sections on website
 - **email** - *optional*, send a report to the email
 - **full_name** - *optional*, included in the report