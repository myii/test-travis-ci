#!/bin/sh
# Only use this for debugging!
set -x

echo "${1}"
echo "${2}"
echo "${3}"
echo "${4}"
echo "${5}"
echo "${6}"
echo "${7}"
echo "${8}"
echo "${9}"
echo "${10}"

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
