import PushNotification, {Importance} from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';

class Notification {
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        // console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        // console.log('NOTIFICATION:', notification);
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        // console.log('ACTION:', notification.action);
        // console.log('NOTIFICATION:', notification);
      },

      onRegistrationError: function (err) {
        // console.error(err.message, err);
      },
      requestPermissions: Platform.OS === 'ios',

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

  sendNotification = (channel, title, message, subText) => {
    PushNotification.localNotification({
      channelId: channel, //
      title, // (optional)
      message, // (required)
      subText,
    });
  };
}

export const notification = new Notification();
