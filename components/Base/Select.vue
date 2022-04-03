<template>
  <v-select
    dense
    solo
    :items="items"
    :label="label"
    @input="handleInput"
  ></v-select>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    dense: {
      type: Boolean,
      default: false
    },
    solo: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e)
    }
  }
}
</script>
