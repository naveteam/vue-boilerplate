import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Sentry from '@sentry/browser'

import { version, name } from '../package.json'

import App from './App.vue'
import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import Login from './routes/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      component: Login
    }
  ]
})


if (process.env.VUE_APP_NODE_ENV === 'production') {
  Sentry.init({
    Vue: Vue,
    dsn: process.env.VUE_APP_SENTRY_URL,
    environment: process.env.VUE_APP_NODE_ENV,
    debug: process.env.VUE_APP_NODE_ENV !== 'production',
    release: `${name}@${version}`
  })
}

Vue.config.productionTip = false

Vue.component('Column', require('./components/Column.vue').default)
Vue.component('Row', require('./components/Row.vue').default)
Vue.component('Typography', require('./components/Typography.vue').default)
Vue.component('Button', require('./components/Button.vue').default)
Vue.component('Container', require('./components/Container.vue').default)
Vue.component('Link', require('./components/Link.vue').default)
Vue.component('Loader', require('./components/Loader.vue').default)
Vue.component('Picture', require('./components/Picture.vue').default)
Vue.component('Input', require('./components/Input.vue').default)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
