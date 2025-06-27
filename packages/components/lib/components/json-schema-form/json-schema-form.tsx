import { withTheme, FormProps } from '@rjsf/core';
import { Theme as MuiTheme } from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import type { RJSFSchema, UiSchema } from '@rjsf/utils';
import TreeViewWidget from './TreeViewWidget';

const Form = withTheme(MuiTheme);
const widgets = {
  treeview: TreeViewWidget,
};

export type JsonSchemaFormProps<T> = {
  schema: RJSFSchema;
  uiSchema?: UiSchema;
  formData?: T;
  onChange?: FormProps<T>['onChange'];
  onSubmit?: FormProps<T>['onSubmit'];
  onError?: FormProps<T>['onError'];
};

export default function JsonSchemaForm<T = unknown>({
  schema,
  uiSchema = {},
  formData,
  onChange = console.log.bind(console, 'changed'),
  onSubmit = console.log.bind(console, 'submitted'),
  onError = console.log.bind(console, 'errors'),
}: JsonSchemaFormProps<T>) {
  // formData defaults to undefined if not provided
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      validator={validator}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
      onError={onError}
      widgets={widgets}
      noHtml5Validate={true}
    />
  );
}
