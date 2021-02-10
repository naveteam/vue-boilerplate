import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Sentry from '@sentry/browser'

import { version, name } from '../package.json'

import App from './App.vue'
import Home from './routes/Home'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
