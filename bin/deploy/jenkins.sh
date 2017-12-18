#!/usr/bin/env bash

configure_npm() {
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" > /dev/null
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" > /dev/null

    nvm install 6
}

ensure_required_deps() {
    pip install --user awscli > /dev/null

    NPM_BIN=`which npm`
    REQUIRED_DEPS=(
        deepify
        recink
        recink-snyk
        recink-pagespeed
        recink-codeclimate
        aws-sdk
        uglifyjs-webpack-plugin
        mishoo/UglifyJS2#harmony-v2.8.22
        webpack
    );

    for DEP in ${REQUIRED_DEPS[@]}; do
        if [ ! -d "$(${NPM_BIN} root -g)/${DEP}" ]; then
            echo "Installing missing ${DEP}"
            ${NPM_BIN} install -g ${DEP} || (echo "Failed to install ${DEP}" && exit 1)
        fi
    done
}

echo "Configuring NPM"
configure_npm

echo "Installing required dependencies"
ensure_required_deps

echo "Updating parameters"
aws s3 cp s3://deep-deploy-assets/atm-website/test/.parameters.json src/adtechmedia-website/.parameters.json
aws s3 cp s3://deep-deploy-assets/atm-website/test/deeploy.json src/deeploy.json

echo "Deploying website"
export DEEP_NO_INTERACTION=1
export DEEP_CONFIRMATION_REFUSE=1

deepify deploy src --loglevel=debug

aws s3 cp --include "*.provisioning.json" src/ s3://deep-deploy-assets/atm-website/test/
