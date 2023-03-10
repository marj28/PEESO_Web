import Vue from 'vue'
import App from './App.vue'
// import bootstrap from 'bootstrap';
import vuetify from './plugins/vuetify'
import firebase from './plugins/firebase'
import router from './router'
import store from './store'
// import "bootstrap/dist/css/bootstrap.min.css"

import './FormsRegistration'
import './views/ApplicantView/TrainingForms'
import './views/Navigation'
import './views/EmployerView/CardHolder'
import './views/ApplicantView/CardHolder'
import './views/StudentView/CardHolder'
import './views/AdminView/CardHolder'

Vue.config.productionTip = false

new Vue({ 
  firebase,                                                                            
  vuetify,
  router,
  store,
  // bootstrap,
  render: h => h(App)
}).$mount('#app')
