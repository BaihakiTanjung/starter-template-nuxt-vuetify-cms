<template>
  <div>
    <v-row>
      <v-col>
        <BaseButton :loading="loading" @click="getFetch">Fetch</BaseButton>
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
import { computed, ref, useStore } from '@nuxtjs/composition-api'

export default {
  // middleware: 'authenticated',
  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'Home')

    const loading = ref(false)
    const getFetch = () => {
      loading.value = true
      store.dispatch('fetch/getFetch').finally(() => {
        loading.value = false
      })
    }

    const items = computed(() => store.state.fetch.items)

    return {
      getFetch,
      items,
      loading,
    }
  },
  mounted() {
    this.$store.commit('SET_PAGE_TITLE', 'Home')
  },
}
</script>
