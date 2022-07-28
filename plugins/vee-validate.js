import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, email, confirmed } from 'vee-validate/dist/rules'

import Vue from 'vue'
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: '{_field_} tidak boleh kosong',
})

extend('email', {
  ...email,
  message: 'Email harus valid',
})

extend('confirmed', {
  ...confirmed,
  message: 'Konfirmasi password tidak sama',
})
