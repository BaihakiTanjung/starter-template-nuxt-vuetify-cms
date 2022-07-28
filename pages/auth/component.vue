
<template>
  <div class="component">
    <v-row>
      <v-col cols="12" md="6">
        <div>
          <h3>Dialog</h3>
          <hr class="my-3">
          <!-- Dialog -->
          <DialogModal ref="modal"></DialogModal>
          <!-- End Dialog -->

          <v-row>
            <v-col>
              <BaseButton :loading="loading" @click="handleModal">Modal</BaseButton>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3>Button</h3>
          <hr class="my-3">

          <BaseButton>Test</BaseButton>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3>Card</h3>
          <hr class="my-3">

          <BaseCard>Test</BaseCard>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3>Input</h3>
          <hr class="my-3">

          <BaseInput></BaseInput>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3>Select</h3>
          <hr class="my-3">

          <BaseSelect></BaseSelect>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3>Table</h3>
          <hr class="my-3">

          <BaseTable></BaseTable>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { ref, useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'Component')

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
<style scoped>
.component {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
