import Vue from 'vue'
import Router from 'vue-router'
import store from '..//store';
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import EditPost from '@/components/Posts/EditPost'
import PostView from '@/components/Posts/PostView'
import Archive from '@/components/Archive/Archive'
import Login from '@/components/Login/Login'
import NotFound from '@/components/ErrorPage/NotFound'
import About from '@/components/About/About'
import Recent from '@/components/Recent/Recent'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home',
      component: Index,
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: HelloWorld,
          meta: {
            title: "Home",
          }
        },
        {
          path: 'New',
          name: 'New',
          component: EditPost,
          meta: {
            title: "New a post",
            requireAuth: true
          }
        },
        {
          path: 'Edit/:slug',
          name: 'EditPost',
          component: EditPost,
          meta: {
            title: "edit",
            requireAuth: true
          }
        },
        {
          path: 'View/:slug',
          name: 'PostView',
          component: PostView,
          meta: {
            title: "View"
          }
        },
        {
          path: 'Archive',
          name: 'Archive',
          component: Archive,
          meta: {
            title: "Archive"
          }
        },
        {
          path: 'About',
          name: 'About',
          component: About,
          meta: {
            title: "About me"
          }
        },
        {
          path: 'Recent',
          name: 'Recent',
          component: Recent,
          meta: {
            title: 'Recent'
          }
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: "Login"
      }
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
      meta: {
        title: "404"
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
  var title = to.meta.title;
  if (title) {
    document.title = title;
  }
  if (store.state.user.token && to.name === 'Login') {
    next({ name: 'Home' })
  } else if (!store.state.user.token && to.meta.requireAuth) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;