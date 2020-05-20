#!/bin/bash

NODE_PID=$(cat ./.node_pid)
kill -9 $NODE_PID
