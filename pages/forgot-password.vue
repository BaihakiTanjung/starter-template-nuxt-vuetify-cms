<template>
  <section class="forgot-password h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container>
        <BaseCard class="text-center mt-3">
          <div class="forgot-password-head">
            <h1 class="display-1 font-weight-bold">Lupa Password</h1>
            <p class="text-gray mt-3">
              Masukkan email anda untuk mendapat link untuk merubah password
            </p>
          </div>
          <validation-observer ref="form" v-slot="{ invalid }">
            <form @submit.prevent="handleSubmit">
              <div class="forgot-password-content mt-10 mb-1">
                <div class="email">
                  <BaseInput
                    v-model="formValues.email"
                    prepend-inner-icon="mdi-email"
                    outlined
                    label="Email"
                    rules="required|email"
                    placeholder="Masukkan email anda"
                  ></BaseInput>
                </div>
              </div>
              <div class="forgot-password-button">
                <BaseButton :disabled="invalid" block x-large @click="submit"
                  >Kirim</BaseButton
                >
              </div>
            </form>
          </validation-observer>
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
      email: '',
    })

    const submit = () => {
      router.push('/otp-code')
    }

    return {
      formValues,
      submit,
    }
  },
}
</script>
