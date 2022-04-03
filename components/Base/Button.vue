<template>
  <v-btn :color="color" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
}
</script>
