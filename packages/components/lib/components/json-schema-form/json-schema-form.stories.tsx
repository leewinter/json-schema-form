import type { Meta, StoryObj } from '@storybook/react';
import JsonSchemaForm from './json-schema-form';
import { userEvent, waitFor, expect, fn } from '@storybook/test';

const meta = {
  title: 'Components/JsonSchemaForm',
  component: JsonSchemaForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof JsonSchemaForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    schema: {
      title: 'Todo',
      type: 'object',
      required: ['title'],
      properties: {
        title: { type: 'string', title: 'Title', default: 'A new task' },
        done: { type: 'boolean', title: 'Done?', default: false },
        test: { type: 'boolean', title: 'test?', default: true },
      },
    },
  },
};
