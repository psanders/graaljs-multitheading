#!/usr/bin/env bash

set -e

$JAVA_HOME/bin/jjs -cp libs/app.deps.jar $1
