#!/bin/sh

nohup /bin/node/bin/node node_modules/forever/bin/forever server/server.js &>/dev/null &
