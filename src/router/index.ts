import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
// @/ 是为了简化文件路径引用，指向 src 目录，避免过长的相对路径。
const router = createRouter({
  // 使用哈希模式的路由历史
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import('@/views/ScanViewFeatureDetectView.vue')
    },
    {
      path: '/scan-canvas',
      name: 'scan-canvas',
      component: () => import('@/views/CanvasScanView.vue')
    },
    {
      path: '/scan-magica',
      name: 'scan-magica',
      component: () => import('@/views/MagicaScanView.vue')
    },
    // catch all redirect to /
    {
      path: '/:pathMatch(.*)*',
      name: 'catch-all',
      redirect: { name: 'index' }
    }
  ]
})

export default router
