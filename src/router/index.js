import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/bloghome',
    meta: {
      title: '努力\'向前 | 博客首页'
    },
    component: (resolve) => require(['../components/blog/BlogHome.vue'], resolve)
  },
  {
    path: '/blogart',
	  name: 'blogart',
    component: (resolve) => require(['../components/blog/BlogArt.vue'], resolve),
    meta: {
      title: '努力\'向前 | 文章列表'
    }
  },
  {
    path: '/blogabout',
    name: 'blogabout',
    component: (resolve) => require(['../components/blog/BlogAbout.vue'], resolve),
    meta: {
      title: '努力\'向前 | 关于博客'
    }
  },
  {
    path: '/bloglink',
    component: (resolve) => require(['../components/blog/BlogLink.vue'], resolve),
    meta: {
      title: '努力\'向前 | 友情链接'
    }
  },
  {
    path: '/blogdiary',
    component: (resolve) => require(['../components/blog/BlogDiary.vue'], resolve),
    meta: {
      title: '努力\'向前 | 点滴记录'
    }
  },
  {
    path: '/detialsart',
    name: 'detialsart',
    component: (resolve) => require(['../components/function/DetialsArt.vue'], resolve),
    meta: {
      title: '努力\'向前 | 文章详情'
    }
  },
  {
    path: '/',
    redirect: '/bloghome'
  },
  { 
    path: '*', 
    component: (resolve) => require(['../components/blog/BlogHome.vue'], resolve)
  }
];

var router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
