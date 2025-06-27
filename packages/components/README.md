# @leewinter/json-schema-form

Repository to simply demo different html editors

[Public Storybook](https://leewinter.github.io/json-schema-form)

## Getting Started

### Install packages

```shell
npm i
```

### Storybook

Storybook can be used for manual component testing, or terminal testing of a hosted Storybook page. The tests are isolated to a story level.

#### Run Storybook

```shell
npm run storybook
```

#### Test Storybook (local)

_Your Storybook needs to be running in a separate terminal before running this (`npm run storybook`)_

```shell
npm run test-storybook
```

A distinction can be made between smoke tests, and tests that actually have interactions.
![alt text](./docs//images//npm_run_test_storybook.png 'Test Storybook')

#### Test Storybook (github)

_This will test the [currently deployed](https://leewinter.github.io/json-schema-form) instance of Storybook from the terminal_

```shell
npm run test-storybook-github
```

### Playwright

Playwright can record multiple steps for interactions with any website, and is better for e2e tests

#### Run Playwright

```shell
npm run playwright
```

![alt text](./docs//images//npm_run_playwright.png 'Test Playwright')

#### Run Playwright Headed

_This will launcher a chromium browser_

```shell
npm run playwright-headed
```

#### Run Playwright Headed

_This will launcher a chromium browser_

```shell
npm run playwright-ui
```

<img src="./docs//images//npm_run_playwright_ui.png" alt="Test Playwright UI" width="70%"/>

#### Run Playwright Codegen

_This will launch the playwright test generator tool_

```shell
npm run playwright-codegen-github
```

<img src="./docs//images//npm_run_playwright-codegen.png" alt="Test Playwright Codegen" width="70%"/>

<img src="./docs//images//storybook_vs_playwright.png" alt="Playwright vs Storybook" width="70%"/>
