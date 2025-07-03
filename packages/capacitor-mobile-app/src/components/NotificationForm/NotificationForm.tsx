import { getPosition } from "../../services/native/geo-locations";
import { sendNotification } from "../../services/native/notifications";
import Button from "@mui/material/Button";

export default function NotificationForm() {
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
    <div>
      <Button variant="contained" color="primary" onClick={notifyLocation}>
        Notify Location
      </Button>
    </div>
  );
}
