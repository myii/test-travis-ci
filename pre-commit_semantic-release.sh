#!/bin/sh
# Only use this for debugging!
set -x

# echo "${1}"
# echo "${2}"
# echo "${3}"
# echo "${4}"
# echo "${5}"
# echo "${6}"
# echo "${7}"
# echo "${8}"
# echo "${9}"
# echo "${10}"
echo "TRAVIS_ALLOW_FAILURE: ${TRAVIS_ALLOW_FAILURE}"
echo "TRAVIS_APP_HOST: ${TRAVIS_APP_HOST}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
echo "TRAVIS_BUILD_DIR: ${TRAVIS_BUILD_DIR}"
echo "TRAVIS_BUILD_ID: ${TRAVIS_BUILD_ID}"
echo "TRAVIS_BUILD_NUMBER: ${TRAVIS_BUILD_NUMBER}"
echo "TRAVIS_BUILD_WEB_URL: ${TRAVIS_BUILD_WEB_URL}"
echo "TRAVIS_COMMIT: ${TRAVIS_COMMIT}"
echo "TRAVIS_COMMIT_MESSAGE: ${TRAVIS_COMMIT_MESSAGE}"
echo "TRAVIS_COMMIT_RANGE: ${TRAVIS_COMMIT_RANGE}"
echo "TRAVIS_COMPILER: ${TRAVIS_COMPILER}"
echo "TRAVIS_DEBUG_MODE: ${TRAVIS_DEBUG_MODE}"
echo "TRAVIS_DIST: ${TRAVIS_DIST}"
echo "TRAVIS_EVENT_TYPE: ${TRAVIS_EVENT_TYPE}"
echo "TRAVIS_JOB_ID: ${TRAVIS_JOB_ID}"
echo "TRAVIS_JOB_NAME: ${TRAVIS_JOB_NAME}"
echo "TRAVIS_JOB_NUMBER: ${TRAVIS_JOB_NUMBER}"
echo "TRAVIS_JOB_WEB_URL: ${TRAVIS_JOB_WEB_URL}"
echo "TRAVIS_OS_NAME: ${TRAVIS_OS_NAME}"
echo "TRAVIS_OSX_IMAGE: ${TRAVIS_OSX_IMAGE}"
echo "TRAVIS_PULL_REQUEST: ${TRAVIS_PULL_REQUEST}"
echo "TRAVIS_PULL_REQUEST_BRANCH: ${TRAVIS_PULL_REQUEST_BRANCH}"
echo "TRAVIS_PULL_REQUEST_SHA: ${TRAVIS_PULL_REQUEST_SHA}"
echo "TRAVIS_PULL_REQUEST_SLUG: ${TRAVIS_PULL_REQUEST_SLUG}"
echo "TRAVIS_REPO_SLUG: ${TRAVIS_REPO_SLUG}"
echo "TRAVIS_SECURE_ENV_VARS: ${TRAVIS_SECURE_ENV_VARS}"
echo "TRAVIS_SUDO: ${TRAVIS_SUDO}"
echo "TRAVIS_TEST_RESULT: ${TRAVIS_TEST_RESULT}"
echo "TRAVIS_TAG: ${TRAVIS_TAG}"
echo "TRAVIS_BUILD_STAGE_NAME: ${TRAVIS_BUILD_STAGE_NAME}"

###############################################################################
# (A) Update `FORMULA` with `${nextRelease.version}`
###############################################################################
sed -i -e "s_^\(version:\).*_\1 ${1}_" FORMULA


###############################################################################
# (B) Use `m2r` to convert automatically produced `.md` docs to `.rst`
###############################################################################

# Install `m2r`
sudo -H pip install m2r

# Copy and then convert the `.md` docs
cp *.md docs/
cd docs/
m2r --overwrite *.md

# Change excess `H1` headings to `H2` in converted `CHANGELOG.rst`
sed -i -e '/^=.*$/s/=/-/g' CHANGELOG.rst
sed -i -e '1,4s/-/=/g' CHANGELOG.rst

# Use for debugging output, when required
# cat AUTHORS.rst
# cat CHANGELOG.rst

# Return back to the main directory
cd ..
