import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";

import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index";

createApp(App).use(store).use(router).use(bootstrap).mount("#app");
