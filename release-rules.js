// Sources:
// * https://github.com/jy95/torrent-files-library-cli/blob/master/config/release-rules.js
// * https://github.com/semantic-release/commit-analyzer/blob/e8c560459d7ef8752180154ed0263ce262aa22a7/lib/default-release-rules.js
// * https://github.com/semantic-release/commit-analyzer/blob/fc0f98d41b989f5d3314e2e84c3430d0ca615daf/README.md
// * https://github.com/semantic-release/commit-analyzer/blob/2fd449f7927846bb1acd271582ecccca4592c4b7/test/fixtures/release-rules.js
// * ...
// * ...
// * ...

module.exports = [
  {breaking: true, release: 'major'},
  {type: 'feat', release: 'minor'},
  {type: 'fix', release: 'patch'},
  {type: 'docs', release: 'patch'},
  {type: 'style', release: 'patch'},
  {type: 'refactor', release: 'patch'},
  {type: 'perf', release: 'patch'},
  {type: 'test', release: 'patch'},
];
