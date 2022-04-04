
<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="text-center">❤️ About ❤️</h1>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { useStore } from '@nuxtjs/composition-api'

export default {

  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'About')
  },
}
</script>
