import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./Components/UI/BaseCard.vue";
import BaseButton from "./Components/UI/BaseButton.vue";

// import "./assets/main.css";

createApp(App)
    .component('BaseCard', BaseCard)
    .component('BaseButton', BaseButton)
    .mount("#app");
