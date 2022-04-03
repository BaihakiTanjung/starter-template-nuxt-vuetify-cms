<template>
  <v-card
    v-bind="$attrs"
    :loading="loading"
    class="pa-15"
    :width="width"
    max-width="1000"
  >
    <template v-for="slot in Object.keys($scopedSlots)">
      <slot :name="slot"></slot>
    </template>
  </v-card>
</template>
<script>
export default {
  name: 'BaseCard',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    elevation: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      loading: false,
      selection: [],
    }
  },
}
</script>
<style lang="scss" scoped>
.v-sheet.v-card {
  border-radius: 20px !important;
}
</style>
