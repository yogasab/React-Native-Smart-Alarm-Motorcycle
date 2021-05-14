import PushNotification, {Importance} from 'react-native-push-notification';

class Notification {
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        // console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        // console.log('NOTIFICATION:', notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        // console.log('ACTION:', notification.action);
        // console.log('NOTIFICATION:', notification);
      },

      onRegistrationError: function (err) {
        // console.error(err.message, err);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  };

  createChannel = channel => {
    PushNotification.createChannel(
      {
        channelId: channel,
        channelName: 'My channel',
        channelDescription: 'A channel to categorise your notifications',
        playSound: false,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      created => {}, //
    );
  };

  sendNotification = (channel, title, message) => {
    PushNotification.localNotification({
      channelId: channel, //
      title, // (optional)
      message, // (required)
    });
  };
}

export const notification = new Notification();
