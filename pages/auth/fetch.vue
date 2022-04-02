<template>
  <div>
    <v-row>
      <v-col>
        <BaseButton @click="getFetch">Fetch</BaseButton>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Result</h2>
        {{ items }}
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { computed, useStore } from '@nuxtjs/composition-api'

export default {
  // middleware: 'authenticated',
  setup() {
    const store = useStore()

    store.commit('setPageTitle', 'Home')

    const getFetch = () => {
      store.dispatch('fetch/getFetch')
    }

    const items = computed(() => store.state.fetch.items)

    return {
      getFetch,
      items,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', 'Home')
  },
}
</script>
