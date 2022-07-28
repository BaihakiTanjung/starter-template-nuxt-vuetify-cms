<template>
  <section class="change-password h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container>
        <BaseCard class="text-center mt-3 pa-15">
          <div class="change-password-head">
            <h1 class="display-1 font-weight-bold">Ganti Password</h1>
            <p class="text-gray mt-3">
              Masukkan password baru anda untuk mengganti password lama anda
            </p>
          </div>
          <validation-observer ref="observer">
            <form @submit.prevent="handleSubmit">
              <div class="change-password-content mt-5 mb-1">
                <div class="email">
                  <BaseInput v-model="formValues.password" name="Password" outlined rules="required"
                    prepend-inner-icon="mdi-lock" placeholder="Password*"></BaseInput>
                </div>
                <div class="password">
                  <BaseInput v-model="formValues.confirmPassword" name="Confirm Password" outlined
                    rules="required|confirmed:Password" prepend-inner-icon="mdi-lock" placeholder="Confirm Password*">
                  </BaseInput>
                </div>
              </div>

              <div class="change-password-button">
                <BaseButton x-large block type="submit">Submit</BaseButton>
              </div>
            </form>
          </validation-observer>
        </BaseCard>
      </v-container>
    </div>
  </section>
</template>
<script>
import { reactive, useRouter, ref } from '@nuxtjs/composition-api'
export default {
  layout: 'auth',
  setup() {
    const router = useRouter()
    const formValues = reactive({
      password: '',
      confirmPassword: '',
    })
    const observer = ref(null)
    const handleSubmit = async () => {
      const isValid = await observer.value.validate();
      if (!isValid) return;
      router.push('/auth/home')
    }

    return {
      formValues,
      handleSubmit,
      observer
    }
  },
}
</script>
