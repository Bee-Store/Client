#!/bin/bash

git add .
echo -e "\n Enter your commit message"
read commit_message

git commit -am $commit_message

git push