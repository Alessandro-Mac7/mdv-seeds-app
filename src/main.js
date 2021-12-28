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
import BaseSpinner from './components/ui/BaseSpinner.vue'
import BaseToast from './components/ui/BaseToast.vue'


const app = createApp(App)
app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('back-button', BackButton);
app.component('base-dialog', BaseDialog);
app.component('base-toast', BaseToast);
app.component('base-spinner', BaseSpinner);

app.mount('#app');


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
    apiKey: "AIzaSyAtlxhU6wg0hwsj3ANJVWP4pdzlPyTn3EA",
    authDomain: "mdv-seed.firebaseapp.com",
    projectId: "mdv-seed",
    storageBucket: "mdv-seed.appspot.com",
    messagingSenderId: "837140767054",
    appId: "1:837140767054:web:0b289ce168afc1e10d7e1f",
    measurementId: "G-HFTTE360TV"
}; */