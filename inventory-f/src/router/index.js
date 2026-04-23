import { createRouter, createWebHistory } from "vue-router";
import CarrosView  from "../views/CarrosView.vue";
import ConductoresView from "../views/ConductoresView.vue";

const routes = [
  { path: "/carros",  name: "carros",  component: CarrosView },
  { path: "/conductores", name: "conductores", component: ConductoresView },
  { path: "/",        redirect: "/carros" },
];

export default createRouter({ history: createWebHistory(), routes });
