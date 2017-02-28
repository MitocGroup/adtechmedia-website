# Getting Started

## Introduction
ATM stands for AdTechMedia, the advertising platform with micropayments capabilities for media content
monetization. ATM API is a set of web services designed to support the AdTechMedia platform. The
white labeled nature of AdTechMedia allows direct integration into any web site or web application
as native look and feel.

### Base endpoints
AdTechMedia platform runs multiple environments. The following are the base endpoints per environment:

- [x] Production environment: https://api.adtechmedia.io/v1
- [x] Development environment: https://api-dev.adtechmedia.io/v1
- [ ] Staging environment: https://api-stage.adtechmedia.io/v1
- [ ] Testing environment: https://api-test.adtechmedia.io/v1

### Authorization
In order to make calls to ATM APIs, the HTTP request must include `X-Api-Key` as HTTP header.

> No matter whatever environment you use, the ATM API key is associated to a very limited `free plan`.
If you constantly reach API limits, please contact ATM administrators to switch to a higher `premium plan`.

## User Guide

### Prerequisites
This quick user guide uses `curl` command line interface as reference. We'll setup ATM API base endpoint as
environmental variable to be used in further examples:

```shell
# `Production` environment
export ATM_API_BASE='https://api.adtechmedia.io/v1'

# `Development` environment
export ATM_API_BASE='https://api-dev.adtechmedia.io/v1'

# `Staging` environment
export ATM_API_BASE='https://api-stage.adtechmedia.io/v1'

# `Testing` environment
export ATM_API_BASE='https://api-test.adtechmedia.io/v1'
```

> Use only one environment at a time. Don't use the API key from one environment in another one.

### Step 1. Create an ATM API key to be used with web services calls

1.1 Generate the API key:

```shell
curl -XPUT "$ATM_API_BASE/atm-admin/api-gateway-key/create" \
     -d '{ "Name" : "Your key name or identifier" }'
```

1.2 Save response as `environmental variable(s)` for further use:

```shell
export ATM_API_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" // the value associated to `$response.Key`
```

> Any further requests to ATM APIs must include this API key

### Step 2. Create a Property to identify your web site or web application

2.1 Create the Property:

```shell
curl -XPUT "$ATM_API_BASE/atm-admin/property/create" \
    -H "X-Api-Key: $ATM_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
        "Name": "Your web site / web application name",
        "Website": "https://example.com",
        "SupportEmail": "hello@adtechmedia.io",
        "Country": "USA",
        "ConfigDefaults": {
            "targetModal": {
                "targetCb": "function(modalNode, cb) { modalNode.mount(document.getElementById('#header'), modalNode.constructor.MOUNT_APPEND) }",
                "toggleCb": "function(cb) { cb(true) }"
            },
            "content": {
                "authorCb": "function(onReady) { onReady({fullName: 'Administrator', avatar: 'https://avatars.io/twitter/mitocgroup' }) }",
                "container": "main > article.story",
                "selector": "h3, p, div.paragraph, cite"
            }
        }
    }'
```

`ConfigDefaults` basic parameters explanation:

  - `$payload.ConfigDefaults.targetModal.targetCb` is a javascript hook (aka callback) for indicating
  where the `ATM Modal` should be inserted

  - `$payload.ConfigDefaults.targetModal.toggleCb` is a javascript hook (aka callback) for showing or hiding
  the `ATM Modal` (e.g. `cb(true)` - show, `cb(false)` - hide)

  - `$payload.ConfigDefaults.content.authorCb` is a javascript hook (aka callback) used to indicate
  the content's author

  - `$payload.ConfigDefaults.content.container` is a css3 selector used by `document.querySelectorAll()`
  function to find the content blocks available on the web page

  - `$payload.ConfigDefaults.content.selector` is a css3 selector used by `$contentBlock.querySelectorAll()`
  function (where `$contentBlock` is a block's `HTML node`) to find the content units to be scrambled
  inside each content block

> To get the list of all supported countries and available revenue models per country use ATM API endpoint ending in
[/property/supported-countries](https://mitocgroup.github.io/atm/api/#path--atm-admin-property-supported-countries)

2.2 Save response as `environmental variable(s)` for further use:

```shell
export ATM_API_PROPERTY="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // the value associated to `$response.Id`
export ATM_JS="$ATM_API_BASE/atm-admin/$ATM_API_PROPERTY/atm.min.js" // the value associated to `$response.BuildPath`
```

### Step 3. Place `atm.min.js` to the buttom of the web page

```html
  <!-- Place It At The End of The Content Page -->
  <script type="javascript" src="$ATM_JS"></script>
  </body>
</html>
```

> Append a query parameter (e.g. ?_v=20170101235959) to `atm.min.js` path that is ideally valid for 24 hours

### Useful Links

- [ATM API Docs](https://mitocgroup.github.io/atm/api/)
