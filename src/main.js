import { createApp } from 'vue'; 
import App from './App.vue';
import router from './router';


import 'bootstrap/dist/css/bootstrap.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


library.add(faThumbsUp, faThumbsDown);


const app = createApp(App);


app.component('font-awesome-icon', FontAwesomeIcon);


app.use(router);

app.mount('#app');
