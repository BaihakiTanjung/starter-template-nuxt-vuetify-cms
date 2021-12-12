<template>
  <div>
    <section
      v-if="error.statusCode === 404"
      class="error-404 h-100 d-flex justify-center"
    >
      <div class="my-auto">
        <v-container fluid>
          <BaseCard class="text-center">
            <template #header>
              <div class="login-head">
                <h1 class="display-2 font-weight-bold">{{ pageNotFound }}</h1>
              </div>
            </template>
            <template #content>
              <div class="error-404-content my-10">
                <img src="~assets/images/404.svg" alt="404" srcset="" />
              </div>
            </template>
            <template #action>
              <div class="error-404-button">
                <p>{{ error.message }}</p>
                <BaseButton to="/auth/home" x-large>Back To Home</BaseButton>
              </div>
            </template>
          </BaseCard>
        </v-container>
      </div>
    </section>

    <section v-else class="error-404 primary h-100 d-flex justify-center">
      <div class="my-auto">
        <v-container fluid>
          <BaseCard class="text-center mt-10">
            <template #header>
              <div class="login-head">
                <h1 class="display-2 font-weight-bold">{{ otherError }}</h1>
              </div>
            </template>
            <template #content>
              <div class="error-404-content my-10">
                <img src="~assets/images/404.svg" alt="404" srcset="" />
              </div>
            </template>
            <template #action>
              <div class="forgot-password-button">
                <BaseButton to="/auth/home" x-large>Back To Home</BaseButton>
              </div>
            </template>
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
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
