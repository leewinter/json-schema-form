import { FormProps } from '@rjsf/core';
import { RJSFSchema, UiSchema } from '@rjsf/utils';

export type JsonSchemaFormProps<T> = {
    schema: RJSFSchema;
    uiSchema?: UiSchema;
    formData?: T;
    onChange?: FormProps<T>['onChange'];
    onSubmit?: FormProps<T>['onSubmit'];
    onError?: FormProps<T>['onError'];
};
export default function JsonSchemaForm<T = unknown>({ schema, uiSchema, formData, onChange, onSubmit, onError, }: JsonSchemaFormProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
