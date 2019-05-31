#!/usr/bin/env bash

set -e

$GRAALVM_HOME/bin/java -cp libs/app.deps.jar JSLauncher $1
