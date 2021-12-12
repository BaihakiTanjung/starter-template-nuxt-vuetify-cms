<template>
  <div>
    <div v-if="isLoading" class="vld-parent">
      <loading :active.sync="isLoading" is-full-page>
        <LoadingCustom></LoadingCustom>
      </loading>
    </div>
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  methods: {
    start() {
      this.$store.commit('setLoading', true)
    },
    finish() {
      setTimeout(() => {
        this.$store.commit('setLoading', false)
      }, 1000)
    }
  }
}
</script>
