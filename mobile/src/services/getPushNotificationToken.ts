import * as Notifications from "expo-notifications";

export async function getPushNotificationToken() {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    const { granted } = await Notifications.requestPermissionsAsync();
    if (!granted) {
      alert("You need to enable notifications to use this app.");
      return;
    }
  }

  const pushToken = await Notifications.getExpoPushTokenAsync();
  return pushToken.data;
}
