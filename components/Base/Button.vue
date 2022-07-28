<template>
  <v-btn :color="color" v-bind="$attrs" type="type" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>
