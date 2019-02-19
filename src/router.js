import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
