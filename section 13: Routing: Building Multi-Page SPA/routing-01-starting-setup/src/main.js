import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {path: '/', redirect: '/teams'},
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { path: '/users', components: { default: UserList, footer: UsersFooter } },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savePosition) {
    // console.log(to, from);
    if (savePosition) {
      return savePosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function(to, from, next){
    console.log('Global beforeEach');
    console.log(to, from);
    // if(to.name === 'team-members'){
    //   next()
    // }else{
    //   next({name: 'team-members', params:{ teamId: 't2'}});
    // }
    next()
})

const app = createApp(App);

app.use(router);

app.mount('#app');
