<template>
  <!-- App.vue -->
  <v-app>
    <!-- Sizes your content based upon application components -->
    <div class="auth">
      <v-main>
        <!-- If using vue-router -->
        <nuxt />
      </v-main>
    </div>
  </v-app>
</template>
<script>
export default {
  mounted() {
    const theme = localStorage.getItem('useDarkTheme')
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true
      } else this.$vuetify.theme.dark = false
    }
  },
}
</script>
<style lang="scss" scoped>
.auth {
  height: 100vh;
}
</style>
