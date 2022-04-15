<template>
  <validation-provider v-slot="{ errors }" :name="label" :rules="rules">
    <v-text-field
      :type="type"
      :label="label"
      :append-icon="appendIcon"
      :value="value"
      v-bind="$attrs"
      :error-messages="errors"
      v-on="$listeners"
    ></v-text-field>
  </validation-provider>
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: [String, Array],
      default: '',
    },
  },
}
</script>
