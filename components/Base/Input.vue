<template>
  <v-text-field
    :solo="solo"
    :rounded="rounded"
    :type="type"
    :label="label"
    :append-icon="appendIcon"
    :dense="dense"
    :persistent-hint="persistentHint"
    :value="value"
    @input="handleInput"
  ></v-text-field>
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
    solo: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: ''
    },
    dense: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    persistentHint: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput(e) {
      // console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
