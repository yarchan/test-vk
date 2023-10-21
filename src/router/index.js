import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: ()=>import('../views/Main.vue'),
    children:[
      {
        path: '/',
        name: 'get-friends',
        component: ()=>import('../components/get-friends.vue'),
      }
    ]
  },
  { 
  path:'/friend-info',
    name:'friend-info',
    component:()=>import('../components/friend-info.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
