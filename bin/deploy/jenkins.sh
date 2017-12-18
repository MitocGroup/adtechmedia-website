#!/usr/bin/env bash

ensure_required_deps() {
    pip install --user awscli > /dev/null

    NPM_BIN=`which npm`
    REQUIRED_DEPS=(
        deepify@3.0.49
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

echo "Installing required dependencies"
ensure_required_deps

echo "Deploying website"
export DEEP_NO_INTERACTION=1
export DEEP_CONFIRMATION_REFUSE=1

deepify deploy src --loglevel=debug
