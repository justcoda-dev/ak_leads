import {createApp} from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from './router'


const app = createApp(App).use(router);
app.mount("#app");