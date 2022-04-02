<template>
  <!-- App.vue -->

  <div class="blank">
    <v-app>
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- If using vue-router -->
        <nuxt />
      </v-main>
    </v-app>
  </div>
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
