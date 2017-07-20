#!/usr/bin/env bash

setup_variables() {
    export ALLOW_DEPLOY=0
    export DEPLOY_ENV=${TRAVIS_BRANCH}

    case ${DEPLOY_ENV} in
        test | stage | master ) ALLOW_DEPLOY=1 ;;
    esac
}

setup_git() {
    git config user.name "Travis CI"
    git config user.email "travis@adtechmedia.io"
    git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
}

setup_npm() {
    npm config set depth 0
    npm link aws-sdk
}

echo "Setting up travis variables"
setup_variables
echo "Setting up git client"
setup_git
echo "Setting up NPM config"
setup_npm
