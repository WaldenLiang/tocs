const routes = [{
  path: '/',
  component: () => import('layouts/Main.vue'),
  children: [{
    path: '',
    component: () => import('pages/Home/Index.vue'),
    children: [{
      path: '',
      component: () => import('pages/Home/Pages/Home.vue')
    }, {
      path: 'project',
      component: () => import('pages/Home/Pages/Project.vue')
    }, {
      path: 'template',
      component: () => import('pages/Home/Pages/Template.vue')
    }, {
      path: 'reading-link',
      component: () => import('pages/Home/Pages/ReadingLink.vue')
    }, {
      path: 'recycle-bin',
      component: () => import('pages/Home/Pages/RecycleBin.vue')
    }]
  }, {
    path: '/project/:id',
    component: () => import('pages/Project/Index'),
    children: [{
      name: 'ProjectHome',
      path: '',
      component: () => import('pages/Project/pages/Home')
    }, {
      name: 'ProjectDocument',
      path: 'doc/:documentId',
      component: () => import('pages/Project/pages/Document')
    }]
  }]
}, {
  path: '/',
  component: () => import('layouts/Auth'),
  children: [{
    name: 'SignIn',
    path: 'sign-in',
    component: () => import('pages/Auth/SignIn.vue')
  }, {
    name: 'SignUp',
    path: 'sign-up',
    component: () => import('pages/Auth/SignUp.vue')
  }]
}, {
  path: '/error500',
  component: () => import('pages/Error500.vue')
}, {
  path: '*',
  component: () => import('pages/Error404.vue')
}]

export default routes
