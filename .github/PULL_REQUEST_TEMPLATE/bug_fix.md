---
name: Bug fix
about: Propose a bug fix to help us improve
title: 'fix: '
labels: 'bug'
assignees: ''

---

<!--
Notes:
1. Only propose a _bug fix_ using this template.
2. Use the appropriate template for proposing a _new feature_.
3. Please direct questions to the [`#formulas` channel on Slack](https://saltstackcommunity.slack.com/messages/C7LG8SV54/), which is bridged to `#saltstack-formulas` on Freenode.
-->

### Does this PR introduce a `BREAKING CHANGE`?
<!-- Delete as appropriate to answer `Yes` or `No`. -->

Yes/No.

<!-- If `Yes`, explain what the breaking changes are. -->
<!-- If there are multiple breaking changes, list them all. -->



### Related issues and/or pull requests
<!-- Please link any related issues/PRs here, especially any issues that are closed by this PR. -->



### Describe the fix you're proposing
<!-- A clear and concise description of what you have implemented. -->
<!-- Consider explaining each commit if they cover different aspects of the bug fix. -->



### Pillar / config required to test the bug fix
<!-- Provide links to the SLS files and/or relevant configs (be sure to remove sensitive info). -->



### Debug log showing how the bug fix works
<!-- Include a debug log showing how this fix works, e.g. using `salt-minion -l debug`. -->
<!-- Alternatively, linking to Kitchen debug logs is useful, e.g. via. Travis CI. -->
<!-- Most useful is providing a passing InSpec test, which can be used to verify any proposed fix. -->



### Documentation checklist
<!-- Please tick each box that is relevant. -->

- [ ] Updated the `README` (e.g. `Available states`).
- [ ] Updated `pillar.example`.

### Testing checklist
<!-- Please tick each box that is relevant. -->

- [ ] Included in Kitchen (i.e. under `state_top`).
- [ ] Covered by new/existing tests (e.g. InSpec, Serverspec, etc.).
- [ ] Updated the relevant test pillar.

### Additional context
<!-- Add any other context about the bug fix here. -->


