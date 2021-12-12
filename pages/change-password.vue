<template>
  <section class="change-password h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container>
        <BaseCard class="text-center mt-3">
          <template #header>
            <div class="change-password-head">
              <h1 class="display-2 font-weight-bold">Ganti Password</h1>
              <p class="text-gray mt-3">
                Masukkan password baru anda untuk mengganti password lama anda
              </p>
            </div>
          </template>
          <template #content>
            <div class="change-password-content my-5 mx-10">
              <div class="email px-10">
                <BaseInput solo rounded label="Password Anda"></BaseInput>
              </div>
              <div class="password px-10">
                <BaseInput
                  solo
                  rounded
                  label="Konfirmasi Password Anda"
                ></BaseInput>
              </div>
            </div>
          </template>
          <template #action>
            <div class="change-password-button">
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
  methods: {
    submit() {
      this.$router.push('/forgot-password')
    }
  }
}
</script>
