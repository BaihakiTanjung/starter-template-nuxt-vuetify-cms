<template>
  <section class="otp-code h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container>
        <BaseCard class="text-center mt-3 pa-15">
          <div class="otp-code-head">
            <h1 class="display-1 font-weight-bold">Masukkan kode OTP</h1>
            <p class="text-gray mt-3">
              Kode OTP anda sudah dikirim ke email/nomor anda
            </p>
          </div>
          <div class="otp-code-content my-5 mx-8">
            <div class="ma-auto" style="max-width: 350px">
              <v-otp-input v-model="formValues.otp" type="password" @finish="onFinish" length="6"></v-otp-input>
            </div>
          </div>
          <div class="resend my-5">
            <a class="">Kirim ulang kode OTP</a>
          </div>

        </BaseCard>
      </v-container>
    </div>
  </section>
</template>
<script>
import { reactive, useRouter } from '@nuxtjs/composition-api'
export default {
  layout: 'auth',
  setup() {
    const router = useRouter()

    const formValues = reactive({
      otp: '',
    })

    const onFinish = () => {
      router.push('/change-password')
    }

    return {
      formValues,
      onFinish,
    }
  },
}
</script>
