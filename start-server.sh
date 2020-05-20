#!/bin/bash

node ./src/service.js &
echo $! > .node_pid

