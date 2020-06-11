import Vue from 'vue'
import VueRouter from 'vue-router'
import { scroll } from 'quasar'

import routes from './routes'

const { getScrollTarget, setScrollPosition } = scroll

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
export default function (/* { store, ssrContext } */) {
  return new VueRouter({
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      } else if (to.hash) {
        scrollToElement(to.hash)
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
}

function scrollToElement (anchor) {
  const el = document.querySelector(anchor)
  const target = getScrollTarget(el)
  const offset = el.offsetTop
  const duration = 200
  setScrollPosition(target, offset, duration)
}
