import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/HomePage.vue";
import Article from "../pages/Article.vue";
import NewsPage from "../pages/NewsPage.vue";
import Gallery from "../pages/Gallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/article/:id",
    name: "Article",
    component: Article,
  },
  {
    path: "/news",
    name: "NewsPage",
    component: NewsPage,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
