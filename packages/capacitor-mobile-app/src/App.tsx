import { useEffect } from "react";
import "./App.css";
import { darkTheme } from "@json-schema-form/components/lib";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import UserProfileForm from "./components/UserProfileForm";

import { requestPermissions } from "./services/native/permissions";
import { sendNotification } from "./services/native/notifications";
import { getPosition } from "./services/native/geo-locations";

function App() {
  useEffect(() => {
    requestPermissions();
  }, []);

  const notifyLocation = async () => {
    const position = await getPosition();
    if (position.coords) {
      const scheduleResult = await sendNotification(
        position.coords as GeolocationCoordinates
      );
      console.log("scheduleResult", scheduleResult);
    }
  };

  return (
    <>
      <h1>Capacitor App</h1>
      <div className="card">
        <button onClick={() => notifyLocation()}>Notify Location</button>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box sx={{ maxWidth: 700, width: "100%", padding: 2 }}>
            <UserProfileForm />
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
