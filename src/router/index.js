import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Kanban from '@/components/Kanban';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: Kanban,
        },
      ],
    },
  ],
});
