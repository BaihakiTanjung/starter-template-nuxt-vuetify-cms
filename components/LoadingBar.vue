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

import { computed, useStore } from '@nuxtjs/composition-api'

export default {
  components: {
    Loading,
  },
  setup(props, context) {
    const store = useStore()

    const isLoading = computed(() => store.state.isLoading)

    return {
      isLoading,
    }
  },
  methods: {
    start() {
      this.$store.commit('SET_LOADING', true)
      // mapMutations(['SET_LOADING']),
    },
    finish() {
      setTimeout(() => {
        this.$store.commit('SET_LOADING', false)
      }, 1000)
    },
  },
}
</script>
