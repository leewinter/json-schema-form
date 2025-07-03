import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProviderWrapper } from "./contexts/theme-context";

import { requestPermissions } from "./services/native/permissions";

function App() {
  useEffect(() => {
    requestPermissions();
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
