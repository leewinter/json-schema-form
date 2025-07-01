import { ThemeProvider, CssBaseline } from "@mui/material";
import { compactTheme } from "@json-schema-form/components/lib";

export const withMuiProvider = (Component: React.ComponentType<any>) =>
  function WrappedWithTheme(props: any) {
    return (
      <ThemeProvider theme={compactTheme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  };
