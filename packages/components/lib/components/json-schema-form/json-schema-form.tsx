import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import type { RJSFSchema } from '@rjsf/utils';

function JsonSchemaForm({ schema }: { schema: RJSFSchema }) {
  const log = type => console.log.bind(console, type);

  return (
    <Form
      schema={schema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={log('errors')}
    />
  );
}

export default JsonSchemaForm;
