
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '/login', component: () => import('pages/login') },
      { path: '/signup', component: () => import('pages/signup') },
      { path: '/blog', name: 'Blog', component: () => import('pages/blog') },
      { path: '', component: () => import('pages/userbloglist') },
      { path: '/users', component: () => import('pages/userlist') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
