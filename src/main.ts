import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Empty from './components/Empty.vue'

const app = createApp(App);
app.use(router);
app.component('Empty', Empty);
app.config.errorHandler = (err) => {
  console.log('errorHandler', err);
};
app.mount('#app');
