#!/bin/sh
FRONTEND_DIR=$(dirname -- "$0")
BACKEND_DIR=~/Projects/Full-stack-open-2018-part3
cd ${FRONTEND_DIR}
npm run build
rm -rf ${BACKEND_DIR}/build
cp -r build ${BACKEND_DIR}
