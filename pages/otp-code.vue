<template>
  <section class="otp-code h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container>
        <BaseCard class="text-center mt-3">
          <template #header>
            <div class="otp-code-head">
              <h1 class="display-2 font-weight-bold">Masukkan kode OTP</h1>
              <p class="text-gray mt-3">
                Kode OTP anda sudah dikirim ke email/nomor anda
              </p>
            </div>
          </template>
          <template #content>
            <div class="otp-code-content my-5 mx-8">
              <div class="ma-auto" style="max-width: 350px">
                <v-otp-input
                  v-model="otp"
                  type="password"
                  length="6"
                ></v-otp-input>
              </div>
            </div>
          </template>
          <template #action>
            <div class="resend my-5">
              <a class="">Kirim ulang kode OTP</a>
            </div>
            <div class="otp-code-button">
              <BaseButton x-large @click="submit">Masuk</BaseButton>
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
  data() {
    return {
      otp: ''
    }
  },
  methods: {
    submit() {
      this.$router.push('/change-password')
    }
  }
}
</script>
