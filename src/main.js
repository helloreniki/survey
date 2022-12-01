import { createApp } from "vue";
import mitt from 'mitt'
import App from "./App.vue";
import BaseCard from "./Components/UI/BaseCard.vue";
import BaseButton from "./Components/UI/BaseButton.vue";

const emitter = mitt()

// import "./assets/main.css";

createApp(App)
    .component('BaseCard', BaseCard)
    .component('BaseButton', BaseButton)
    .provide('emitter', emitter)
    .mount("#app");
