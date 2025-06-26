import type { Meta, StoryObj } from "@storybook/react";
import QuillEditor from "./quill-editor";
import { userEvent, waitFor, expect, fn } from '@storybook/test';

const meta = {
  title: "Components/HtmlEditors/QuillEditor",
  component: QuillEditor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onHtmlChange: fn()
  },
} satisfies Meta<typeof QuillEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithData: Story = {
  args: {
    html: "<p>Quill editor with default html</p>",
  }
}

export const ListItems: Story = {
  args: {
    html: "",
  },
  play: async ({ canvasElement }) => {
    // Wait for Quill to render the editor area
    const editor = await waitFor(() =>
      canvasElement.querySelector(".ql-editor")
    );

    if (!editor) {
      throw new Error("Quill editor contenteditable div not found.");
    }

    // Ensure editor is contenteditable
    expect(editor).toHaveAttribute("contenteditable", "true");

    // Find the ordered list button
    const orderedListButton = canvasElement.querySelector('.ql-list[value="ordered"]');
    if (!orderedListButton) throw new Error("Ordered list button not found");

    // ype the first list item and press Enter
    await userEvent.type(editor, "List Item 1{Enter}", { delay: 50 });

    // Click the Ordered List button first before typing
    await userEvent.click(orderedListButton);

    await waitFor(() => expect(editor.querySelectorAll("ol li").length).toBe(1));

    // Final validation: Ensure multiple list items exist
    const listItems = editor.querySelectorAll("ol li");
    expect(listItems.length).toBe(1);
    expect(listItems[0]).toHaveTextContent("List Item 1");
  }
};



export const BoldText: Story = {
  args: {
    html: "",
  },
  play: async ({ canvasElement }) => {
    // Wait for Quill to render the actual editable area
    const editor = await waitFor(() =>
      canvasElement.querySelector(".ql-editor")
    );

    if (!editor) {
      throw new Error("Quill editor contenteditable div not found.");
    }

    // Ensure editor is contenteditable
    expect(editor).toHaveAttribute("contenteditable", "true");

    // Find toolbar buttons
    const boldButton = canvasElement.querySelector(".ql-bold");

    if (!boldButton)
      throw new Error("Toolbar buttons not found");

    // Click Bold and type text
    await userEvent.click(boldButton);
    await userEvent.type(editor, "Bold Text", { delay: 50 });
    await userEvent.click(boldButton);

    const listItem = editor.querySelector("strong");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent("Bold Text");
  }
}

export const ItalicText: Story = {
  args: {
    html: "",
  },
  play: async ({ canvasElement }) => {
    // Wait for Quill to render the actual editable area
    const editor = await waitFor(() =>
      canvasElement.querySelector(".ql-editor")
    );

    if (!editor) {
      throw new Error("Quill editor contenteditable div not found.");
    }

    // Ensure editor is contenteditable
    expect(editor).toHaveAttribute("contenteditable", "true");

    // Find toolbar buttons
    const italicButton = canvasElement.querySelector(".ql-italic");

    if (!italicButton)
      throw new Error("Toolbar buttons not found");

    // Click Italic and type text
    await userEvent.click(italicButton);
    await userEvent.type(editor, "Italic Text", { delay: 50 });
    await userEvent.click(italicButton);

    const listItem = editor.querySelector("em");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent("Italic Text");
  }
}

export const UnderlineText: Story = {
  args: {
    html: "",
  },
  play: async ({ canvasElement }) => {
    // Wait for Quill to render the actual editable area
    const editor = await waitFor(() =>
      canvasElement.querySelector(".ql-editor")
    );

    if (!editor) {
      throw new Error("Quill editor contenteditable div not found.");
    }

    // Ensure editor is contenteditable
    expect(editor).toHaveAttribute("contenteditable", "true");

    // Find toolbar buttons
    const underlineButton = canvasElement.querySelector(".ql-underline");

    if (!underlineButton)
      throw new Error("Toolbar buttons not found");

    // Click Underline and type text
    await userEvent.click(underlineButton);
    await userEvent.type(editor, "Underlined Text", { delay: 50 });
    await userEvent.click(underlineButton);

    const listItem = editor.querySelector("u");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent("Underlined Text");
  }
}

export const HeaderText: Story = {
  args: {
    html: "",
  },
  play: async ({ canvasElement }) => {
    // Wait for Quill to render the actual editable area
    const editor = await waitFor(() =>
      canvasElement.querySelector(".ql-editor")
    );

    if (!editor) {
      throw new Error("Quill editor contenteditable div not found.");
    }

    // Ensure editor is contenteditable
    expect(editor).toHaveAttribute("contenteditable", "true");

    // Type header text
    await userEvent.type(editor, "Header Text", { delay: 50 });

    // Find the Header dropdown button
    const headerDropdown = canvasElement.querySelector(".ql-header .ql-picker-label");

    if (!headerDropdown) {
      throw new Error("Header dropdown button not found.");
    }

    // Click the header dropdown to open the options
    await userEvent.click(headerDropdown);

    // Wait for the dropdown options to be visible
    const headerOption = await waitFor(() =>
      canvasElement.querySelector('.ql-picker-options .ql-picker-item[data-value="1"]') // Select H1
    );

    if (!headerOption) {
      throw new Error("Header option for H1 not found.");
    }

    // Click the selected header option (H1)
    await userEvent.click(headerOption);

    // Wait for the header to actually appear in the DOM
    const headerElement = await waitFor(() => editor.querySelector("h1"));

    if (!headerElement) {
      throw new Error("Header element (h1) not found in the editor.");
    }

    // Validate the applied header style
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Header Text");
  }
};


export const HeaderAndNormalText: Story = {
  args: {
    html: "",
  },
  play: async ({ canvasElement }) => {
    // Wait for Quill to render the actual editable area
    const editor = canvasElement.querySelector(".ql-editor")

    if (!editor) {
      throw new Error("Quill editor contenteditable div not found.");
    }

    // Ensure editor is contenteditable
    expect(editor).toHaveAttribute("contenteditable", "true");

    // Type header text
    await userEvent.type(editor, "Header Text", { delay: 50 });

    // Find the Header dropdown button
    const headerDropdown = canvasElement.querySelector(".ql-header .ql-picker-label");

    if (!headerDropdown) {
      throw new Error("Header dropdown button not found.");
    }

    const orderedListButton = canvasElement.querySelector('.ql-list[value="ordered"]');

    if (!orderedListButton) throw new Error("Ordered list button not found");

    // Click the header dropdown to open the options
    await userEvent.click(headerDropdown);

    // Wait for the dropdown options to be visible
    const headerOption = await waitFor(() =>
      canvasElement.querySelector('.ql-picker-options .ql-picker-item[data-value="1"]') // Select H1
    );

    if (!headerOption) {
      throw new Error("Header option for H1 not found.");
    }

    // Click the selected header option (H1)
    await userEvent.click(headerOption);

    // Wait for the header to actually appear in the DOM
    const headerElement = await waitFor(() => editor.querySelector("h1"));

    if (!headerElement) {
      throw new Error("Header element (h1) not found in the editor.");
    }

    await userEvent.type(editor, "{Enter}", { delay: 50 });

    await userEvent.click(headerOption);

    await userEvent.type(editor, "{Enter}Should exit the header element", { delay: 50 });



    // Validate the applied header style
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Header Text");
  }
};