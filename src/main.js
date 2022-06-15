import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueQuagga from "vue-quaggajs";
import router from "./router";

createApp(App).use(router).use(VueQuagga).mount("#app");
