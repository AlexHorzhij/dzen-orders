import { createRouter, createWebHistory } from "vue-router";
// import AppProductsList from "../views/AppProductsList.vue";

const routes = [
  {
    path: "/",
    name: "orders",
    component: () => import("../views/AppOrdersPage.vue"),
  },
  {
    path: "/groups",
    name: "groups",

    component: () => import("../views/AppGroupsPage.vue"),
  },
  {
    path: "/groups/:id",
    component: () => import("../views/AppGroupsPage.vue"),
    children: [
      {
        path: "",
        name: "group_products",
        props: true,
        component: () => import("../views/AppProductsList.vue"),
      },
    ],
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/AppProductsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
