import "./App.css";
import {
  JsonSchemaForm,
  compactTheme,
  lightTheme,
  playfulTheme,
  darkTheme,
} from "@json-schema-form/components/lib";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import type { RJSFSchema, UiSchema } from "@rjsf/utils";

// --- Schema ---
export const complexSchema: RJSFSchema = {
  title: "User Profile",
  description: "Fill out your profile details",
  type: "object",
  required: ["name", "email", "age", "location"],
  properties: {
    name: { type: "string", title: "Full Name" },
    email: { type: "string", format: "email", title: "Email Address" },
    password: { type: "string", title: "Password", minLength: 6 },
    bio: { type: "string", title: "Bio" },
    age: { type: "integer", title: "Age", minimum: 18, maximum: 100 },
    gender: {
      type: "string",
      title: "Gender",
      enum: ["Male", "Female", "Other"],
    },
    location: {
      type: "string",
      title: "Choose a location",
    },
    birthDate: {
      type: "string",
      format: "date",
      title: "Date of Birth",
    },
    interests: {
      type: "array",
      title: "Interests",
      items: {
        type: "string",
        enum: ["Sports", "Music", "Tech", "Art", "Gaming", "Travel"],
      },
      uniqueItems: true,
    },
    rating: {
      type: "integer",
      title: "Satisfaction Level",
      minimum: 0,
      maximum: 10,
    },
    subscribe: {
      type: "boolean",
      title: "Subscribe to Newsletter",
      default: true,
    },
    documents: {
      type: "string",
      format: "data-url",
      title: "Upload Resume",
    },
    preferences: {
      type: "object",
      title: "Preferences",
      properties: {
        darkMode: { type: "boolean", title: "Dark Mode" },
        betaAccess: { type: "boolean", title: "Beta Features Access" },
      },
    },
  },
};

// --- uiSchema ---
export const complexUiSchema: UiSchema = {
  password: {
    "ui:widget": "password",
  },
  bio: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 5,
    },
  },
  gender: {
    "ui:widget": "radio",
  },
  location: {
    "ui:widget": "treeview",
  },
  interests: {
    "ui:widget": "checkboxes",
  },
  rating: {
    "ui:widget": "range",
  },
  documents: {
    "ui:options": {
      accept: ".pdf,.doc,.docx",
    },
  },
};

export const complexFormData = {
  name: "Lee Winter",
  email: "lee.winter@boxspark.co.uk",
  age: 34,
  gender: "Male",
  subscribe: true,
  location: "3", // Assuming nodeId="3" in your TreeView
  birthDate: "1990-06-15",
  interests: ["Tech", "Gaming"],
  rating: 7,
  preferences: {
    darkMode: true,
    betaAccess: false,
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ maxWidth: 700, width: "100%", padding: 2 }}>
          <JsonSchemaForm
            schema={complexSchema}
            uiSchema={complexUiSchema}
            formData={complexFormData}
            onSubmit={(val) => console.log("Submitted:", val)}
            onChange={(val) => console.log("Changed:", val)}
            onError={(val) => console.log("Errors:", val)}
          />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
