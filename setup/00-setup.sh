#!/bin/bash

cd "$(dirname $0)"
cd ..

rm -f .git/hooks/pre-push
ln -s setup/git/hooks/pre-push .git/hooks/pre-push
