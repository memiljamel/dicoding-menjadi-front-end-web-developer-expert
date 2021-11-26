import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this.onMessageHandler;
  },

  onMessageHandler(message) {
    const movie = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        icon: 'images/icons/icon-192x192.png',
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;
