import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProviderWrapper } from "./contexts/theme-context";

import { requestPermissions } from "./services/native/permissions";
import { StatusBar } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";

function App() {
  useEffect(() => {
    requestPermissions();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: false }); // Ensures the webview is below the status bar
    }
  }, []);

  return (
    <>
      <ThemeProviderWrapper>
        <Outlet />
      </ThemeProviderWrapper>
    </>
  );
}

export default App;
