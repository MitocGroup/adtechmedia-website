#!/usr/bin/env bash

setup_git() {
    git config user.name "Travis CI"
    git config user.email "travis@adtechmedia.io"
    git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
}

setup_aws_sdk() {
    npm link aws-sdk
}

echo "Setup git client"
setup_git
echo "Setup AWS-SDK"
setup_aws_sdk
