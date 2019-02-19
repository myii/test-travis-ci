// Sources:
// * https://github.com/semantic-release/semantic-release/issues/575#issuecomment-354110425
// * https://github.com/oclif/semantic-release/blob/master/release.config.js
// * https://github.com/jy95/torrent-files-library-cli/blob/master/config/release.config.js
// * https://github.com/semantic-release/apm-config/blob/b5d20caaa2e4055511aa1be3c1f923ecedcb688d/index.js
// * https://github.com/semantic-release/gitlab-config/blob/332f5c64b672d00f5298d6501311c8a669d0a3c4/index.js
// * ...
// * https://github.com/semantic-release/semantic-release/blob/448a0ff977fda5ad44c96571367f60e6fcdee73a/lib/definitions/plugins.js
// * https://github.com/semantic-release/commit-analyzer/blob/fc0f98d41b989f5d3314e2e84c3430d0ca615daf/README.md
// * https://github.com/semantic-release/exec/blob/745d0faed7e402695a2b12035328d5c139da6224/index.js#L98
// * https://github.com/semantic-release/gitlab/blob/43942772d33a681a2f0662f6f3afaf6328e53ab7/lib/definitions/errors.js
// * https://github.com/semantic-release/github/blob/072b1123107897a06fe096c7c4cbeec27d6c4490/lib/resolve-config.js
// * https://github.com/semantic-release/release-notes-generator/blob/563cbd5380789bf03cc3bc6b4a325c1f02da590c/lib/hosts-config.js
// * ...

module.exports = {
  branch: 'master',
  plugins: [
      // '@semantic-release/commit-analyzer',
      ['@semantic-release/commit-analyzer', {
        preset: 'angular',
        releaseRules: './release-rules.js',
      }],
      '@semantic-release/release-notes-generator',
      // '@semantic-release/changelog',
      ['@semantic-release/changelog', {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      }],
      // '@semantic-release/git',
      ['@semantic-release/git', {
        assets: ['CHANGELOG.md'],
        message: `CHORE(RELEASE): \${nextRelease.version} [skip ci]`,
      }],
      '@semantic-release/github',
  ],
  // verifyConditions: {},
  // getLastRelease: {},
  // analyzeCommits: {},
  // verifyRelease: {},
  generateNotes: {
    preset: 'angular',
    writerOpts: {
      commitsSort: [
          'subject',
          'scope',
      ],
      transform: (commit, context) => {
          const issues = []

          commit.notes.forEach(note => {
              note.title = `BREAKING CHANGES`
          })

          if (commit.type === `feat`) {
              commit.type = `Features`
          } else if (commit.type === `fix`) {
              commit.type = `Bug Fixes`
          } else if (commit.type === `perf`) {
              commit.type = `Performance Improvements`
          } else if (commit.type === `revert`) {
              commit.type = `Reverts`
          } else if (commit.type === `docs`) {
              commit.type = `Documentation`
          } else if (commit.type === `style`) {
              commit.type = `Styles`
          } else if (commit.type === `refactor`) {
              commit.type = `Code Refactoring`
          } else if (commit.type === `test`) {
              commit.type = `Tests`
          } else if (commit.type === `build`) {
              commit.type = `Build System`
          } else if (commit.type === `ci`) {
              commit.type = `Continuous Integration`
          } else {
              return
          }

          if (commit.scope === `*`) {
              commit.scope = ``
          }

          if (typeof commit.hash === `string`) {
              commit.hash = commit.hash.substring(0, 7)
          }

          if (typeof commit.subject === `string`) {
              let url = context.repository
                  ? `${context.host}/${context.owner}/${context.repository}`
                  : context.repoUrl
              if (url) {
                  url = `${url}/issues/`
                  // Issue URLs.
                  commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
                      issues.push(issue)
                      return `[#${issue}](${url}${issue})`
                  })
              }
              if (context.host) {
                  // User URLs.
                  commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g, (_, username) => {
                  if (username.includes('/')) {
                      return `@${username}`
                  }

                  return `[@${username}](${context.host}/${username})`
                  })
              }
          }

          // remove references that already appear in the subject
          commit.references = commit.references.filter(reference => {
              if (issues.indexOf(reference.issue) === -1) {
                  return true
              }

              return false
          })

          return commit
      },
    },
  },
  // prepare: {},
  // publish: {},
  // success: {},
  // failure: {},
};
