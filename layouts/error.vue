<template>
  <div>
    <section
      v-if="error.statusCode === 404"
      class="error-404 h-100 d-flex justify-center"
    >
      <div class="my-auto">
        <v-container fluid>
          <BaseCard class="text-center">
            <div class="login-head">
              <h1 class="display-2 font-weight-bold">{{ pageNotFound }}</h1>
            </div>

            <div class="error-404-content my-10">
              <img src="~assets/images/404.svg" width="350" alt="404" />
            </div>

            <div class="error-404-button">
              <p>{{ error.message }}</p>
              <BaseButton to="/auth/home" x-large>Back To Home</BaseButton>
            </div>
          </BaseCard>
        </v-container>
      </div>
    </section>

    <section v-else class="error-404 primary h-100 d-flex justify-center">
      <div class="my-auto">
        <v-container fluid>
          <BaseCard class="text-center">
            <div class="login-head">
              <h1 class="display-2 font-weight-bold">{{ otherError }}</h1>
            </div>

            <div class="error-404-content my-10">
              <img src="~assets/images/error.svg" width="350" alt="error" />
            </div>

            <div class="forgot-password-button">
              <p>{{ error.message }}</p>
              <BaseButton x-large @click="handleReload">Reload Page</BaseButton>
            </div>
          </BaseCard>
        </v-container>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  mounted() {
    const theme = localStorage.getItem('useDarkTheme')
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true
      } else this.$vuetify.theme.dark = false
    }
  },
  methods: {
    handleReload() {
      location.reload()
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
