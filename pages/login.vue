<template>
  <section class="login h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container fluid>
        <BaseCard :width="width" class="mt-10 pa-15">
          <validation-observer ref="observer" slim>
            <form @submit.prevent="handleSubmit(invalid)">
              <div class="login-head text-center">
                <h1 class="display-1 font-weight-bold">Selamat Datang</h1>
                <p class="text-gray font-weight-light mt-2">
                  Masukkan email dan password anda untuk mengakses akun anda
                </p>
              </div>

              <div class="login-content mt-10 mb-5">
                <div class="email">
                  <BaseInput id="email" v-model="login.email" name="Email" placeholder="Email*"
                    prepend-inner-icon="mdi-email" rules="required|email" @keyup.enter.native="handleSubmit()">
                  </BaseInput>
                </div>
                <div class="password">
                  <BaseInput id="password" v-model="login.password" name="Password" prepend-inner-icon="mdi-lock"
                    :append-icon="passwordType ? 'mdi-eye' : 'mdi-eye-off'" :type="passwordType ? 'text' : 'password'"
                    placeholder="Password*" rules="required" @click:append="passwordType = !passwordType"
                    @keyup.enter.native="handleSubmit()">
                  </BaseInput>
                </div>
              </div>

              <div class="login-button">
                <BaseButton block x-large type="submit">Masuk</BaseButton>
              </div>

              <div class="login-footer mt-5 mb-n5 text-center">
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

    const observer = ref(null)
    const handleSubmit = async () => {
      const isValid = await observer.value.validate();
      if (!isValid) return;
      router.push('/auth/home')
    }

    return {
      login,
      passwordType,
      handleSubmit,
      observer
    }
  },
})
</script>
