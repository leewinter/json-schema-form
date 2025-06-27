import type { Meta, StoryObj } from '@storybook/react';
import JsonSchemaForm from './json-schema-form';
import { userEvent, within, expect, fn } from '@storybook/test';
import Box from '@mui/material/Box';
import { action } from '@storybook/addon-actions';
import { RJSFSchema } from '@rjsf/utils/lib/types';

const defaultHandlers = {
  onChange: (val: any) => action('onChange')(val),
  onSubmit: (val: any) => action('onSubmit')(val),
  onError: (val: any) => action('onError')(val),
};

const meta = {
  title: 'Components/JsonSchemaForm',
  component: JsonSchemaForm,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    ...defaultHandlers,
  },
  decorators: [
    Story => (
      <Box sx={{ maxWidth: 700, width: '100%', padding: 2 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof JsonSchemaForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Todo: Story = {
  args: {
    schema: {
      title: 'Todo',
      type: 'object',
      required: ['title'],
      properties: {
        title: { type: 'string', title: 'Title', default: 'A new task' },
        done: { type: 'boolean', title: 'Done?', default: false },
      },
    },
  },
};

export const PreFilledExample: Story = {
  args: {
    schema: {
      title: 'User Info',
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Name' },
        age: { type: 'number', title: 'Age' },
      },
    },
    formData: {
      name: 'Lee Winter',
      age: 43,
    },
    uiSchema: {}, // always pass even if empty
  },
};

export const BasicInfo: Story = {
  args: {
    schema: {
      title: 'Basic Info',
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Full Name' },
        email: { type: 'string', title: 'Email', format: 'email' },
        age: { type: 'integer', title: 'Age', minimum: 0 },
        subscribe: { type: 'boolean', title: 'Subscribe to newsletter' },
      },
    },
  },
};

export const SliderExample: Story = {
  args: {
    schema: {
      title: 'Feedback',
      type: 'object',
      properties: {
        satisfaction: {
          type: 'integer',
          title: 'Satisfaction (0-10)',
          minimum: 0,
          maximum: 10,
        },
      },
    },
    uiSchema: {
      satisfaction: {
        'ui:widget': 'range',
      },
    },
  },
};

export const DateExample: Story = {
  args: {
    schema: {
      title: 'Booking',
      type: 'object',
      properties: {
        startDate: {
          type: 'string',
          format: 'date',
          title: 'Start Date',
        },
      },
    },
  },
};

export const DropdownExample: Story = {
  args: {
    schema: {
      title: 'Survey',
      type: 'object',
      properties: {
        color: {
          type: 'string',
          title: 'Favorite Color',
          enum: ['Red', 'Green', 'Blue'],
        },
      },
    },
  },
};

export const MultiSelectExample: Story = {
  args: {
    schema: {
      title: 'Skills',
      type: 'object',
      properties: {
        skills: {
          type: 'array',
          title: 'Known Skills',
          items: {
            type: 'string',
            enum: ['JavaScript', 'TypeScript', 'Python', 'Go'],
          },
          uniqueItems: true,
        },
      },
    },
    uiSchema: {
      skills: {
        'ui:widget': 'checkboxes',
      },
    },
  },
};

export const FileUploadExample: Story = {
  args: {
    schema: {
      title: 'Upload',
      type: 'object',
      properties: {
        resume: {
          type: 'string',
          format: 'data-url',
          title: 'Upload Resume',
        },
      },
    },
  },
};

export const ArrayExample: Story = {
  args: {
    schema: {
      title: 'Tasks',
      type: 'object',
      properties: {
        tasks: {
          type: 'array',
          title: 'Tasks',
          items: {
            type: 'string',
          },
        },
      },
    },
  },
};

export const TreeViewExample: Story = {
  args: {
    schema: {
      title: 'Choose a Folder',
      type: 'object',
      properties: {
        folder: { type: 'string', title: 'Folder' },
      },
    },
    uiSchema: {
      folder: {
        'ui:widget': 'treeview',
      },
    },
  },
};

const handleSubmitBasic = fn();
export const Basic: StoryObj = {
  args: {
    schema: {
      title: 'Contact Form',
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string', title: 'Name' },
        email: { type: 'string', format: 'email', title: 'Email' },
      },
    },
    uiSchema: {},
    formData: {
      name: '',
      email: '',
    },
  },
  render: args => {
    const schema = { ...args } as RJSFSchema;
    return (
      <JsonSchemaForm
        {...args}
        schema={schema}
        onSubmit={val => handleSubmitBasic(val)}
        onChange={val => action('onChange')(val)}
        onError={val => action('onError')(val)}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = await canvas.findByRole('textbox', { name: /name/i });
    const emailInput = await canvas.findByLabelText('Email');
    const submitButton = await canvas.findByRole('button', { name: /submit/i });

    await userEvent.type(nameInput, 'Lee');
    await userEvent.type(emailInput, 'lee@example.com');
    await userEvent.click(submitButton);

    // Assert the button is in the document
    expect(submitButton).toBeInTheDocument();

    // NOTE: If you're using `fn()` or `vi.fn()` instead of `action()`, you can also assert:
    expect(handleSubmitBasic).toHaveBeenCalled();
  },
};

const handleSubmit = fn();
const handleError = fn();

export const ValidationErrorExample: StoryObj = {
  args: {
    schema: {
      title: 'Validation Test',
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string', title: 'Name' },
        email: { type: 'string', format: 'email', title: 'Email' },
      },
    },
    uiSchema: {},
    formData: {
      name: '',
      email: '',
    },
  },
  render: args => {
    const schema = { ...args } as RJSFSchema;
    return (
      <JsonSchemaForm
        {...args}
        schema={schema}
        onSubmit={handleSubmit}
        onError={handleError}
        onChange={val => action('onChange')(val)}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = await canvas.findByRole('textbox', { name: /name/i });
    const emailInput = await canvas.findByRole('textbox', { name: /email/i });
    const submitButton = await canvas.findByRole('button', { name: /submit/i });

    await userEvent.clear(nameInput);
    await userEvent.type(emailInput, 'lee(at)example.com');
    await userEvent.click(submitButton);
    await new Promise(r => setTimeout(r, 100)); // allow validation to propagate

    const errors = await canvas.findAllByText(/must match format "email"/i);
    expect(errors.length).toBeGreaterThan(0);

    expect(handleError).toHaveBeenCalled();
    expect(handleSubmit).not.toHaveBeenCalled();
  },
};
