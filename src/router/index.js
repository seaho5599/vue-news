import { createRouter, createWebHistory } from "vue-router";
import NewsView from '@/views/NewsView.vue'
import AskView from '@/views/AskView.vue'
import JobsView from '@/views/JobsView.vue'

const router = createRouter ({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '/news',
    
    },
    {
      path: "/news",
      name: "News",
      component: NewsView,
    },
    {
      path: "/ask",
      name: "ASK",
      component: AskView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: JobsView,
    },
  ]
});

// 

export default router;