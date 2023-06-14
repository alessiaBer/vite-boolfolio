import { createRouter, createWebHistory } from "vue-router";
import ProjectNotFound from "./views/ProjectNotFound.vue";
import AppHome from "./views/AppHome.vue";
import ProjectsList from "./views/ProjectsList.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProject from "./views/SingleProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*', 
      name: 'project-not-found', 
      component: ProjectNotFound 
    },
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsList,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
  ],
});
export { router };
