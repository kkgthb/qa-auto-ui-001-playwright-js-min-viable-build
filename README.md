# A tiny Playwright (in Node.js) unit test

_(Accompanies associated blog post on Katie Kodes "[Running UI tests in GitHub Actions](https://katiekodes.com/github-actions-ui-testing/)".)_



---

## Instructions

1. Under the "**Use this template** dropdown at the top-right of [the original repository hosting this tutorial](https://github.com/kkgthb/qa-auto-ui-001-playwright-js-min-viable-build), click "**[Create a new repository](https://github.com/kkgthb/qa-auto-ui-001-playwright-js-min-viable-build/generate)**" and go through the steps to make your own repository based off of this one.
1. Edit the [`/.github/workflows/run-playwright.yaml`](./blob/main/.github/workflows/run-playwright.yaml) file and uncomment out the following 2 lines of code if you actually want it to run nightly at 2:43 AM <br/>_(remove the extra "`# `"from each line, being sure to leave [YAML-appropriate indentation](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started) where it does still belong, putting `schedule` at the same level as `workflow_dispatch` above it and indenting the 1-member list starting with `- cron` inside of `schedule)_:
    ```yaml
      schedule:
        - cron: "43 2 * * *"
    ```
1. Wait for 2:43 AM UTC to come around and watch in amazement as GitHub Actions validates that the "Katie Kodes" blog indeed still says "Katie Kodes" in its HTML title tag. <br/>_(Note:  It may run many minutes after 2:43AM UTC, because GitHub Actions schedules aren't exactly guaranteed.)_

---

## Warning

I've done a few strange things I'd like to draw your attention to.

### There is no website build

The entire Node.js-based codebase, with its `package.json`, etc., has no code in it whatsoever pertaining to the process of making `katiekodes.com` exist on the open internet.

This is not normal.

Usually, I would have chosen Node.js/JavaScript as a language in which to write my Playwright unit test(s) if the website I'm testing were one that already gets built in, or runs on, Node.js/JavaScript.

There wouldn't be an entire `package.json` file dedicated to unit testing alone.

Instead, I'd expand the contents of my website's codebase's `package.json` to use Playwright as a dependency, and I'd add a `playwright.config.js` to the same root folder of my website's codebase that includes its `package.json`.

### The URL to test against is parameterized

The URL `katiekodes.com` whose `<title>` tag I'm checking the contents of gets set in [`/.github/workflows/run-playwright.yaml`](./blob/main/.github/workflows/run-playwright.yaml), not in [`/e2e-test-codebase/my-e2e-tests/my-first-tests.spec.js`](./blob/main/e2e-test-codebase/my-e2e-tests/my-first-tests.spec.js).

That seems potentially nifty for making it easy to if-then-else whether to test against a hardcoded real-world URL, a dynamically computed real-world URL _(e.g. the preview URL returned by the Azure Static Web Apps GitHub Action)_, `localhost`, etc.

### Node packages install slowly

In a real-world project, [`/.github/workflows/run-playwright.yaml`](./blob/main/.github/workflows/run-playwright.yaml) would run `npm ci` to install dependencies like Playwright out of a `package-lock.json` file, not run `npm i` to install them out of a `package.json` file, because that can make the GitHub Action run faster.

I used a slower-running approach so that I could keep this file easier to read for beginners.