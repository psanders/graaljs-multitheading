#!/usr/bin/env bash

set -e

$GRAALVM_HOME/bin/js --jvm --experimental-options --js.nashorn-compat=true --vm.cp=./libs/app.deps.jar  $1
