import Vue from "vue";
import Router from "vue-router";
import TaskListView from "@/views/TaskListView.vue";
import TaskFormView from "@/views/TaskFormView.vue";

Vue.use(Router);

const routes = [
  { path: "/tasks", component: TaskListView },
  { path: "/tasks/new", component: TaskFormView },
  { path: "/tasks/:id", component: TaskFormView },
];

export default new Router({
  mode: "history",
  routes,
});
