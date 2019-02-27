# test-travis-ci

[![Build Status](https://travis-ci.org/myii/test-travis-ci.svg?branch=master)](https://travis-ci.org/myii/test-travis-ci)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<table><tr><th>Table of Contents</th></tr><tr><td>
<!-- toc -->
<!-- tocstop -->
</td></tr></table>

## Introducion

Starting this to test both the TOC as well as the Travis builds,
which are cancelling on the `template-formula` multiple times with:

```travis
travis_fold:start:worker_info
[0K[33;1mWorker information[0m
hostname: 5f75d14f-622d-4cac-9660-cd566ab86ed1@1.production-1-worker-com-gce-3f69
version: v6.2.0 https://github.com/travis-ci/worker/tree/5e5476e01646095f48eec13196fdb3faf8f5cbf7
instance: travis-job-b637b113-964c-48f9-96ad-4b0e9807d3dc travis-ci-garnet-trusty-1512502259-986baf0 (via amqp)
startup: 8.56015052s
travis_fold:end:worker_info
[0K[31;1mCould not fetch .travis.yml from GitHub.[0m
/home/travis/build.sh: line 2: travis_terminate: command not found
/home/travis/build.sh: line 3: travis_cleanup: command not found
/home/travis/build.sh: line 4: travis_footer: command not found
```

* Turns out that the badge led me to the PR build where I'd already removed the branch!
* It wasn't taking me to the very latest build for some reason...
