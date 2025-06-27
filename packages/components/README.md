# @json-schema-form/components

Repository to host json schema to form functionality

[Public Storybook](https://leewinter.github.io/json-schema-form)

## Intro

The `JsonSchemaForm` component will render a form based on the provided schema.

```jsx
import JsonSchemaForm from '@leewinter/json-schema-form';

...

<JsonSchemaForm
  formData={{
    age: 43,
    name: 'Lee Winter',
  }}
  onChange={function Xs() {}}
  onError={function Xs() {}}
  onSubmit={function Xs() {}}
  schema={{
    properties: {
      age: {
        title: 'Age',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
    },
    title: 'User Info',
    type: 'object',
  }}
  uiSchema={{}}
/>
```

![alt text](./docs//images//pre_filled_form_example.png 'Test Storybook')

## Getting Started

### Storybook

Storybook can be used for manual component testing, or terminal testing of a hosted Storybook page. The tests are isolated to a story level.

#### Run Storybook

```shell
bun run storybook
```

#### Test Storybook (local)

_Your Storybook needs to be running in a separate terminal before running this (`bun run storybook`)_

```shell
bun run test-storybook
```

A distinction can be made between smoke tests, and tests that actually have interactions.
![alt text](./docs//images//npm_run_test_storybook.png 'Test Storybook')

#### Test Storybook (github)

_This will test the [currently deployed](https://leewinter.github.io/json-schema-form) instance of Storybook from the terminal_

```shell
bun run test-storybook-github
```

### Playwright

Playwright can record multiple steps for interactions with any website, and is better for e2e tests

#### Run Playwright

```shell
bun run playwright
```

![alt text](./docs//images//npm_run_playwright.png 'Test Playwright')

#### Run Playwright Headed

_This will launcher a chromium browser_

```shell
bun run playwright-headed
```

#### Run Playwright Headed

_This will launcher a chromium browser_

```shell
bun run playwright-ui
```

#### Run Playwright Codegen

_This will launch the playwright test generator tool_

```shell
bun run playwright-codegen-github
```

<img src="./docs//images//storybook_vs_playwright.png" alt="Playwright vs Storybook" width="70%"/>
