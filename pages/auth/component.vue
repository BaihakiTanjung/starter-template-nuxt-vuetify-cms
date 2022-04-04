
<template>
  <div>
    <!-- Dialog -->
    <DialogModal ref="modal"></DialogModal>
    <!-- End Dialog -->

    <v-row>
      <v-col>
        <BaseButton :loading="loading" @click="handleModal">Modal</BaseButton>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { ref, useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'Modal')

    const modal = ref(null)

    const handleModal = () => {
      modal.value.$refs.modal.open()
    }

    return {
      handleModal,
      modal,
    }
  },
}
</script>
