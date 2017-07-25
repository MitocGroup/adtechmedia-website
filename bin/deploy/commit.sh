#!/usr/bin/env bash

APP_PATH=$(dirname $(cd $(dirname $0)/../; pwd -P))
DEPLOY_LOG=${APP_PATH}/docs/deploy.log

ok_msg() {
    echo -e "\033[32;5;148m$1\033[39m"
}

ok_msg "Commiting deploy.log changes"
git fetch origin dev && git checkout . && git checkout dev
git commit -m "#ATM continuous deployment logger [skip ci]" -- ${DEPLOY_LOG}
git push --quiet origin dev
