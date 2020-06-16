import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/bloghome',
    component: (resolve) => require(['../components/blog/BlogHome.vue'], resolve)
  },
  {
    path: '/blogart',
	  name: 'blogart',
    component: (resolve) => require(['../components/blog/BlogArt.vue'], resolve)
  },
  {
    path: '/blogabout',
    name: 'blogabout',
    component: (resolve) => require(['../components/blog/BlogAbout.vue'], resolve)
  },
  {
    path: '/bloglink',
    component: (resolve) => require(['../components/blog/BlogLink.vue'], resolve)
  },
  {
    path: '/blogdiary',
    component: (resolve) => require(['../components/blog/BlogDiary.vue'], resolve)
  },
  {
    path: '/detialsart',
    name: 'detialsart',
    component: (resolve) => require(['../components/function/DetialsArt.vue'], resolve)
  },
  {
    path: '/',
    redirect: '/bloghome'
  }
];

var router = new VueRouter({
  mode: 'history',
  routes:routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
