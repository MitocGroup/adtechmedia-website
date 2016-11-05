adtechmedia-website
===================

[![Build Status](https://travis-ci.org/AdTechMedia/adtechmedia-website.svg?branch=master)](https://travis-ci.org/AdTechMedia/adtechmedia-website)
[![Test Coverage](https://codeclimate.com/repos/57f64bd8e1fafd02fc0026ac/badges/b99788ea59ab482de3cd/coverage.svg)](https://codeclimate.com/repos/57f64bd8e1fafd02fc0026ac/coverage)

This repository stores the code and data for www.adtechmedia.io.


## Getting Started

### Step 1. Pre-requisites

- [x] [Create an Amazon Web Services account](https://www.youtube.com/watch?v=WviHsoz8yHk)
- [x] [Configure AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- [x] [Get Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [x] [JDK 8 and JRE 8 Installation Start Here](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html)
- [x] [Install nvm](https://github.com/creationix/nvm#install-script) and [use node v4.3+](https://github.com/creationix/nvm#usage)
- [ ] Install DEEP CLI, also known as `deepify`:

```bash
npm install deepify -g
```

> If you want to use `deepify` on Windows, please follow the steps from
[Windows Configuration](https://github.com/MitocGroup/deep-framework/blob/master/docs/windows.md)
before running `npm install deepify -g` and make sure all `npm` and `deepify` commands are executed
inside Git Bash.

### Step 2. Install Microservice(s) Locally

```bash
deepify install github://AdTechMedia/adtechmedia-website ~/adtechmedia-website
```

> Path parameter in all `deepify` commands is optional and if not specified, assumes current
working directory. Therefore you can skip `~/adtechmedia-website` by executing
`mkdir ~/adtechmedia-website && cd ~/adtechmedia-website` before `deepify install`.

### Step 3. Run Microservice(s) in Development

```bash
deepify server ~/adtechmedia-website -o
```

> When this step is finished, you can open in your browser the link *http://localhost:8000*
and enjoy the adtechmedia-website running locally.

### Step 4. Deploy Microservice(s) to Production

```bash
deepify deploy ~/adtechmedia-website
```

> Amazon CloudFront distribution takes up to 20 minutes to provision, therefore don’t worry
if it returns an HTTP error in the first couple of minutes.

### Step 5. Remove Microservice(s) from Production

```bash
deepify undeploy ~/adtechmedia-website
```

> Amazon CloudFront distribution takes up to 20 minutes to unprovision. That's why `deepify`
command checks every 30 seconds if it's disabled and when successful, removes it from your account.


## Developer Resources

Having questions related to adtechmedia-website?

- Ask questions: https://stackoverflow.com/questions/tagged/deep-framework
- Chat with us: https://mitocgroup.slack.com/messages/general
- Send an email: feedback@mitocgroup.com

Interested in contributing to adtechmedia-website?

- Contributing: https://github.com/AdTechMedia/adtechmedia-website/blob/master/CONTRIBUTING.md
- Issue tracker: https://github.com/AdTechMedia/adtechmedia-website/issues
- Releases: https://github.com/AdTechMedia/adtechmedia-website/releases
- Roadmap: https://github.com/AdTechMedia/adtechmedia-website/blob/master/ROADMAP.md

Looking for web applications that use (or are similar to) adtechmedia-website?

- Hello World: https://hello.deep.mg | https://github.com/MitocGroup/deep-microservices-helloworld
- Todo App: https://todo.deep.mg | https://github.com/MitocGroup/deep-microservices-todomvc
- AdTechMedia: https://www.adtechmedia.io | https://github.com/AdTechMedia/adtechmedia-website


## Sponsors

This repository is being sponsored by:
- [Mitoc Group](https://www.mitocgroup.com)
- [AdTechMedia](https://www.adtechmedia.io)

This code can be used under MIT license:
> See [LICENSE](https://github.com/AdTechMedia/adtechmedia-website/blob/master/LICENSE) for more details.
