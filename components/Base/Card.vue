<template>
  <v-card
    :elevation="elevation"
    :flat="flat"
    :loading="loading"
    class="pa-15"
    :width="width"
    max-width="1000"
  >
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="action"></slot>
    <slot name="footer"></slot>
  </v-card>
</template>
<script>
export default {
  name: 'BaseCard',
  props: {
    width: {
      type: String,
      default: 'auto'
    },
    elevation: {
      type: Number,
      default: 1
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      selection: []
    }
  },
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-sheet.v-card {
  border-radius: 20px !important;
}
</style>
