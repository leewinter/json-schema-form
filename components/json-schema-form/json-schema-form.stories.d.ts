import { StoryObj } from '@storybook/react';
import { default as JsonSchemaForm } from './json-schema-form';
import { RJSFSchema } from '@rjsf/utils/lib/types';

declare const meta: {
    title: string;
    component: typeof JsonSchemaForm;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onChange: (val: any) => void;
        onSubmit: (val: any) => void;
        onError: (val: any) => void;
    };
    decorators: ((Story: import('@storybook/core/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        schema: RJSFSchema;
        uiSchema?: import('@rjsf/utils').UiSchema | undefined;
        formData?: unknown;
        onChange?: ((data: import('@rjsf/core').IChangeEvent<unknown, RJSFSchema, any>, id?: string) => void) | undefined;
        onSubmit?: ((data: import('@rjsf/core').IChangeEvent<unknown, RJSFSchema, any>, event: import('../../../../../node_modules/react').FormEvent<any>) => void) | undefined;
        onError?: ((errors: import('@rjsf/utils').RJSFValidationError[]) => void) | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Todo: Story;
export declare const PreFilledExample: Story;
export declare const BasicInfo: Story;
export declare const SliderExample: Story;
export declare const DateExample: Story;
export declare const DropdownExample: Story;
export declare const MultiSelectExample: Story;
export declare const FileUploadExample: Story;
export declare const ArrayExample: Story;
export declare const TreeViewExample: Story;
export declare const Basic: StoryObj;
export declare const ValidationErrorExample: StoryObj;
