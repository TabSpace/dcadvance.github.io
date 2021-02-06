#!/bin/sh
branch=$(git rev-parse --symbolic --abbrev-ref HEAD)
if [ "main" == "$branch" ]; then
  echo ".git/hooks: Do not commit to branch: $branch"
  exit 1
fi
