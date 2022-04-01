<template>
  <div>
    <div class="d-flex h-100 justify-center mt-15">
      <h1>❤️ Welcome to Template Nuxt + Vuetify ❤️</h1>
    </div>
  </div>
</template>
<script>
export default {
  // middleware: 'authenticated',
  mounted() {
    this.$store.commit('setPageTitle', 'Home')
    console.log(this.$auth)

    this.$store.commit('setLoading', true)

    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 1500)
  },
}
</script>
