import { Geolocation } from "@capacitor/geolocation";
import { LocalNotifications } from "@capacitor/local-notifications";

export async function requestPermissions() {
  const notificationPermission = await LocalNotifications.requestPermissions();
  const geoLocationPermission = await Geolocation.requestPermissions();
  console.log("Permission result:", geoLocationPermission);
  console.log("Notification permission result:", notificationPermission);
}
