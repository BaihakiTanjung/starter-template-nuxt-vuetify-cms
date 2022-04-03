<template>
  <section class="login h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container fluid>
        <BaseCard :width="width" class="text-center mt-10">
          <template #header>
            <div class="login-head">
              <h1 class="display-2 font-weight-bold">Masuk</h1>
            </div>
          </template>
          <template #content>
            <div class="login-content my-8">
              <div class="email">
                <BaseInput
                  ref="email"
                  v-model="login.email"
                  solo
                  rounded
                  label="Email Anda"
                ></BaseInput>
              </div>
              <div class="password">
                <BaseInput
                  ref="password"
                  v-model="login.password"
                  :append-icon="passwordType ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="passwordType ? 'text' : 'password'"
                  solo
                  :rules="passwordRules"
                  rounded
                  label="Password Anda"
                  required
                  @click:append="passwordType = !passwordType"
                  @keyup.enter.native="submitLogin"
                >
                </BaseInput>
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
                <nuxt-link to="/otp-code" class="text-primary"
                  >Klik di sini</nuxt-link
                >
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
      passwordType: false,
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
  mounted() {
    this.focusEmail()
  },
  methods: {
    submitLogin() {
      this.$store.commit('SET_LOADING', true)
      this.$router.push('/auth/home')
    },
    focusEmail() {
      this.$refs.email.$el.focus()
      console.log(this.$refs.email.$el.focus())
    },
  },
}
</script>
