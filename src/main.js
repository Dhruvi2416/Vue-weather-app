import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "leaflet/dist/leaflet.css";
const app = createApp(App);

app.use(router);

app.config.devtools = false; // Disable devtools in development
app.config.performance = false; // Disable performance tracing

app.mount("#app");
