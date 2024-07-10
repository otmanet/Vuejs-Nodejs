import { createRouter, createWebHistory } from "vue-router";
import AssistanceAuto0 from "./components/AssistanceAuto-0.vue";
// Run the command: npm install vue-router
// Create router.js and define Router
const routes = [
  {
    path: "/",
    alias: "/assistance",
    name: "assistance",
    component: AssistanceAuto0,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
