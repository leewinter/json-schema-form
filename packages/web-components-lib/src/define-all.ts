import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import { withMuiProvider } from "./with-mui-provider";
import { JsonSchemaForm } from "@json-schema-form/components/lib";

const defineComponent = (
  tag: string,
  Component: React.FC<any>,
  observedAttributes?: string[]
) => {
  const WebComponent = reactToWebComponent(
    withMuiProvider(Component),
    React,
    ReactDOM,
    {
      props: {
        test: "string",
        ...(observedAttributes
          ? Object.fromEntries(observedAttributes.map((attr) => [attr, "any"]))
          : {}),
      },
    }
  );
  if (!customElements.get(tag)) {
    customElements.define(tag, WebComponent);
  }
};

export function defineAllWebComponents() {
  defineComponent("json-schema-form", JsonSchemaForm, [
    "schema",
    "uiSchema",
    "formData",
    "onSubmit",
    "onChange",
  ]);
  // add more as needed
}
