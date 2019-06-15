import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSignOutAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser, 
  faSignOutAlt,
  faEllipsisV
)

Vue.component('fa', FontAwesomeIcon)

import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({                
  apiKey: "AIzaSyAguB9D7xZZaQ6zc5RoQl_aOMobV-MBvVk",
  authDomain: "whisperer-sample.firebaseapp.com",
  databaseURL: "https://whisperer-sample.firebaseio.com",
  projectId: "whisperer-sample",
  storageBucket: "whisperer-sample.appspot.com",
  messagingSenderId: "876683866902",
  appId: "1:876683866902:web:ecd56ba214a9f165"
})
export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
