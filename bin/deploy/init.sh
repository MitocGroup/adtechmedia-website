#!/usr/bin/env bash

setup_variables() {
    export ALLOW_DEPLOY=0
    export DEPLOY_ENV=${TRAVIS_BRANCH}
    export DEPLOY_HOST="https://www.adtechmedia.io"

    case ${DEPLOY_ENV} in
        test | stage )
            ALLOW_DEPLOY=1
            DEPLOY_HOST="https://www-${DEPLOY_ENV}.adtechmedia.io"
        ;;
        master ) ALLOW_DEPLOY=1 ;;
    esac
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

setup_git() {
    git config user.name "Travis CI"
    git config user.email "travis@adtechmedia.io"
    git config github.token "${GITHUB_ACCESS_TOKEN}"
    git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
}

setup_npm() {
    npm config set depth 0
    npm link aws-sdk
}

echo "Setting up travis variables"
setup_variables
#echo "Installing required dependencies"
#ensure_required_deps
#echo "Setting up git client"
#setup_git
#echo "Setting up NPM config"
#setup_npm

echo ${TRAVIS_BRANCH}
echo ${ALLOW_DEPLOY}
echo ${DEPLOY_HOST}
