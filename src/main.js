import { createApp } from "vue";
import { createPinia } from 'pinia';
import mitt from 'mitt'
import App from "./App.vue";
import BaseCard from "./Components/UI/BaseCard.vue";
import BaseButton from "./Components/UI/BaseButton.vue";

const pinia = createPinia()
const emitter = mitt()

const app = createApp(App)

// import "./assets/main.css";

 app.component('BaseCard', BaseCard)
    .component('BaseButton', BaseButton)
    .provide('emitter', emitter)
    .use(pinia)
    .mount("#app");
