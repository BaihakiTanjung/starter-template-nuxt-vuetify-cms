<template>
  <v-text-field
    :type="type"
    :label="label"
    :append-icon="appendIcon"
    :value="value"
    v-bind="$attrs"
    v-on="$listeners"
  ></v-text-field>
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    appendIcon: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    persistentHint: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>
