<template>
  <div>
    <h1>Dropdown {{ $route.params.id }}</h1>
  </div>
</template>
<script>
import { useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'Dropdown')


    return {

    }
  },

}
</script>
