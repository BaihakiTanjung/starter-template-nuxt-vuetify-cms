<template>
  <section class="forgot-password h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container>
        <BaseCard class="text-center mt-3">
          <template #header>
            <div class="forgot-password-head">
              <h1 class="display-2 font-weight-bold">Lupa Password</h1>
              <p class="text-gray mt-3">
                Masukkan email anda untuk mendapat link untuk merubah password
              </p>
            </div>
          </template>
          <template #content>
            <div class="forgot-password-content my-5 mx-10">
              <div class="email px-10">
                <BaseInput solo rounded label="Email Anda"></BaseInput>
              </div>
            </div>
          </template>
          <template #action>
            <div class="forgot-password-button">
              <BaseButton x-large @click="submit">Kirim</BaseButton>
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
      this.$router.push('/')
    }
  }
}
</script>
