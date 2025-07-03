import { Geolocation } from "@capacitor/geolocation";

export const getPosition = async () => {
  const position = await Geolocation.getCurrentPosition();
  if (!position || !position.coords) {
    throw new Error("Unable to retrieve geolocation data");
  }

  return position;
};
