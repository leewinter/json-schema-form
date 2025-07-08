import { LocalNotifications } from "@capacitor/local-notifications";

export const sendNotification = async (coords: GeolocationCoordinates) => {
  const id = Math.floor(Date.now() / 1000);
  return await LocalNotifications.schedule({
    notifications: [
      {
        title: "Geolocation Update",
        body: `${coords.latitude} ${coords.longitude}`,
        id: id,
        schedule: { at: new Date(Date.now() + 1000 * 1) }, // 1 seconds later
        sound: undefined,
        attachments: undefined,
        actionTypeId: "",
        extra: null,
      },
    ],
  });
};
