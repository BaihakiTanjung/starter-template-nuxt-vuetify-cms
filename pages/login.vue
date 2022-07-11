<template>
  <section class="login h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container fluid>
        <BaseCard :width="width" class="text-center mt-10 pa-15">
          <validation-observer ref="form" v-slot="{ invalid }">
            <form @submit.prevent="handleSubmit">
              <div class="login-head">
                <h1 class="display-1 font-weight-bold">Selamat Datang</h1>
                <p class="text-gray font-weight-light mt-2">
                  Masukkan email dan password anda untuk mengakses akun anda
                </p>
              </div>

              <div class="login-content mt-10 mb-5">
                <div class="email">
                  <BaseInput ref="email" v-model="login.email" outlined label="Email" placeholder="Masukkan email anda"
                    prepend-inner-icon="mdi-email" rules="required|email" @keyup.enter.native="submitLogin"></BaseInput>
                </div>
                <div class="password">
                  <BaseInput ref="password" v-model="login.password" outlined prepend-inner-icon="mdi-lock"
                    :append-icon="passwordType ? 'mdi-eye' : 'mdi-eye-off'" :type="passwordType ? 'text' : 'password'"
                    label="Password" placeholder="Masukkan password anda" rules="required"
                    @click:append="passwordType = !passwordType" @keyup.enter.native="submitLogin">
                  </BaseInput>
                </div>
              </div>

              <div class="login-button">
                <BaseButton :disabled="invalid" block x-large @click="submitLogin">Masuk</BaseButton>
              </div>

              <div class="login-footer mt-5 mb-n5">
                <p>
                  Lupa password?
                  <nuxt-link to="/forgot-password" class="text-primary font-weight-bold">Klik di sini</nuxt-link>
                </p>
              </div>
            </form>
          </validation-observer>
        </BaseCard>
      </v-container>
    </div>
  </section>
</template>
<script>
import { reactive, ref, useRouter, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'auth',
  // middleware: 'guest',
  setup() {
    const router = useRouter()

    const login = reactive({
      email: '',
      password: '',
    })

    const passwordType = ref(false)

    const submitLogin = () => {
      router.push('/auth/home')
    }

    return {
      login,
      passwordType,
      submitLogin,
    }
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 320
        case 'sm':
          return 400
        case 'md':
          return 600
        case 'lg':
          return 600
        case 'xl':
          return 700
      }
    },
  },
})
</script>
