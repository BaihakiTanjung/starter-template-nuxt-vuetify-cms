<template>
  <section class="login h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container fluid>
        <BaseCard width="600" class="text-center mt-10">
          <template #header>
            <div class="login-head">
              <h1 class="display-2 font-weight-bold">Masuk</h1>
            </div>
          </template>
          <template #content>
            <div class="login-content my-5">
              <div class="email">
                <BaseInput v-model="login.email" solo rounded label="Email Anda"></BaseInput>
              </div>
              <div class="password">
                <BaseInput
                  v-model="login.password"
                  type="password"
                  solo
                  rounded
                  label="Password Anda"
                ></BaseInput>
              </div>
            </div>
          </template>
          <template #action>
            <div class="login-button">
              <div class="captcha my-5">disini tempat captcha</div>
              <BaseButton x-large @click="submitLogin">Masuk</BaseButton>
            </div>
          </template>
          <template #footer>
            <div class="login-footer mt-5">
              <p>
                Lupa password?
                <nuxt-link to="/otp-code" class="text-primary">Klik di sini</nuxt-link>
              </p>
            </div>
          </template>
        </BaseCard>
      </v-container>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'auth',
  // middleware: 'guest',
  data() {
    return {
      login: {
        email: 'rozorgame12@gmail.com',
        password: '12345',
      },
    }
  },
  mounted() {
    // this.$loading.show()
  },
  methods: {
    submitLogin() {
      this.$store.commit('setLoading', true)

      this.$router.push('/auth/home')

    },
  },
}
</script>
