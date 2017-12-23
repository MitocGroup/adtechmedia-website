#!/usr/bin/env bash

setup_variables() {
    echo "Setup global variables"
    export DEEP_NO_INTERACTION="1"
    export DEEP_CONFIRMATION_REFUSE="1"
    export DEEP_HOTFIX="0"
    export DEEP_DEPLOY="0"
    #export DEEP_ENV=${GIT_BRANCH}
    export DEEP_ENV="test"

    case ${DEEP_ENV} in
        test | stage )
            DEEP_DEPLOY="1"
        ;;
    esac

    if [[ ${TRAVIS_PULL_REQUEST_BRANCH} =~ ^hotfix ]]; then DEEP_HOTFIX="1"; fi
}

ensure_required_deps() {
    echo "Install required dependencies"

    NPM_BIN=`which npm`
    REQUIRED_DEPS=(
        aws-sdk
        babel-cli
        babel-preset-node6
        babel-plugin-add-module-exports
        compass
        deepify
        mishoo/UglifyJS2#harmony-v2.8.22
        mitocgroup/npm_lazy
        node-compass
        node-pre-gyp
        prebuild-install
        recink
        recink-codeclimate
        recink-comment
        recink-pagespeed
        recink-snyk
        uglifyjs-webpack-plugin
        webpack
    );

    for DEP in ${REQUIRED_DEPS[@]}; do
        if [ ! -d "$(${NPM_BIN} root -g)/${DEP}" ]; then
            echo "Installing missing ${DEP}"
            ${NPM_BIN} install -g ${DEP} || (echo "Failed to install ${DEP}" && exit 1)
        fi
    done
}

setup_npm() {
    echo "Setup node package manager"
    npm config set depth 0
    npm link aws-sdk
}

setup_git() {
    echo "Setup git client"
    git config user.name "Jenkins CI"
    git config user.email "hello@adtechmedia.io"
    git config --add core.longpaths true
}

setup_deepify() {
    echo "Setup deepify registry"
    deepify registry config github --set "travis:${GITHUB_ACCESS_TOKEN}"
}

setup_variables
ensure_required_deps
setup_npm
setup_git
#setup_deepify

if [ -n ${DEEP_DEPLOY} ] && [ "${DEEP_DEPLOY}" == "1" ]; then
    echo "Deploying ATM"
    node "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/deploy"
else
    echo "Skipping deepify deploy"
fi