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

Vue.component('Column', { template: `<div class="column"><slot /></div>`})
Vue.component('Row', { template: `<div class="row"><slot /></div>`})
Vue.component('Typography', { template: `<p><slot /></p>`})
Vue.component('Button', { template: `<button class="button"><slot /></button>`})
Vue.component('Container', { template: `<div class="column container"><slot /></div>`})
Vue.component('Link', { props: ['href', 'text', 'target'], template: `<a :href="href" :target="target">{{ text }}</a>`})
Vue.component('Loader', { template: `<p><slot>carregando...</slot></p>`})
Vue.component('Picture', { props: ['src', 'alt'], template: `<div><img class="image" :src="src" :alt="alt"></div>`})
Vue.component('Input', { props: ['label', 'placeholder', 'type'],
  template: `
    <Column class="input-container">
      <Typography class="label">{{label}}</Typography>
      <input :placeholder="placeholder" :type="type" />
    </Column>
    `
  }
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
