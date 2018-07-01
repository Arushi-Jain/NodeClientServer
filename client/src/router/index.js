import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import firebase from 'firebase'
// import config from './config/cyrrup-web-challenge-firebase-adminsdk-vokl4-560c797e9e.json'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueFire)
var config = {
  apiKey: 'AIzaSyDVcbIwKI2brQj4N2nmD8EyFGAu7BFv7X0',
  authDomain: 'cyrrup-web-challenge.firebaseapp.com',
  databaseURL: 'https://cyrrup-web-challenge.firebaseio.com',
  projectId: 'cyrrup-web-challenge'
}
firebase.initializeApp(config)
const firestore = firebase.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

// use var db = firebase.firestore() to access database
const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * When going with "history" mode, please also make sure "build.publicPath"
   * is set to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default Router
