<template>
  <section class="change-password h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container>
        <BaseCard class="text-center mt-3">
          <div class="change-password-head">
            <h1 class="display-1 font-weight-bold">Ganti Password</h1>
            <p class="text-gray mt-3">
              Masukkan password baru anda untuk mengganti password lama anda
            </p>
          </div>
          <validation-observer ref="form" v-slot="{ invalid }">
            <form @submit.prevent="handleSubmit">
              <div class="change-password-content mt-5 mb-1">
                <div class="email">
                  <BaseInput
                    v-model="formValues.password"
                    outlined
                    rules="required"
                    prepend-inner-icon="mdi-lock"
                    label="Password"
                    placeholder="Masukkan password anda"
                  ></BaseInput>
                </div>
                <div class="password">
                  <BaseInput
                    v-model="formValues.confirmPassword"
                    outlined
                    rules="required"
                    prepend-inner-icon="mdi-lock"
                    label="Konfirmasi Password"
                    placeholder="Masukkan konfirm password anda"
                  ></BaseInput>
                </div>
              </div>

              <div class="change-password-button">
                <BaseButton :disabled="invalid" x-large block @click="submit"
                  >Submit</BaseButton
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
      password: '',
      confirmPassword: '',
    })

    const submit = () => {
      router.push('/auth/home')
    }

    return {
      formValues,
      submit,
    }
  },
}
</script>
