import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';

// Base component
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BackButton from './components/ui/BackButton.vue'
import BaseDialog from './components/ui/BaseDialog.vue'


const app = createApp(App)
app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('back-button', BackButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');