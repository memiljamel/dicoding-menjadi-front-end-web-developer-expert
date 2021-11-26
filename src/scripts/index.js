import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import './components/SkipToMainContent';
import App from './views/App';
import serviceWorkerRegister from './utils/serviceWorker-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.getElementById('button'),
  drawer: document.getElementById('drawer'),
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceWorkerRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
