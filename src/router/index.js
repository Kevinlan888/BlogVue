import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditPost from '@/components/Posts/Edit/EditPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Posts/AddPost',
      name: 'AddPost',
      component: EditPost
    },
    {
      path: '/Posts/Edit/:slug',
      name: 'EditPost',
      component: EditPost
    }
  ]
})
