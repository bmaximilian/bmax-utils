#!/bin/bash

cd "$(dirname "$0")"
cd ..

cd .git/hooks
rm -f pre-push
ln -s ../../setup/git/hooks/pre-push pre-push
