
## Install

1. ```npm install```
2. ```npm install -g claudia```
3. copy ```config-sample.js``` to ```config.js``` and edit it
4. edit server.js
5. patch claudiajs (see below)
6. ```claudia create --region us-east-1 --api-module server```

## How to patch claudiajs

Ovewrite the apigw-params.txt of your globally installed claudiajs with the
patched version from https://github.com/fczuardi/calamarble-xhub

Below one way of doing this:
```
cp node_modules/calamarble-xhub/apigw-params.txt `which claudia | sed -e "s/bin\/claudia/lib\/node_modules\/claudia\/json-templates\/apigw-params.new.txt/g"`

cd `which claudia | sed -e "s/bin\/claudia/lib\/node_modules\/claudia\/json-templates\//g"`

mv apigw-params.txt apigw-params.old.txt

mv apigw-params.new.txt apigw-params.txt
```

This patching is a workaround for https://github.com/claudiajs/claudia/issues/58
and won't be necessary once it gets fixed.

## Developing

- edit server.js
- ```claudia update```
