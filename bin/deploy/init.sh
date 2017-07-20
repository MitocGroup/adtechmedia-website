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

setup_aws_sdk() {
    npm link aws-sdk
}

echo "Setup variables"
setup_variables
echo "Setup git client"
setup_git
echo "Setup AWS-SDK"
setup_aws_sdk
