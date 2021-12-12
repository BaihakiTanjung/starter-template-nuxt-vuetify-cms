<template>
  <v-btn
    elevation="2"
    :color="color"
    :small="small"
    :large="large"
    :x-large="xLarge"
    :x-small="xSmall"
    :block="block"
    :outlined="outlined"
    :to="to"
    @click="onClick"
  >
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    small: Boolean,
    large: Boolean,
    xLarge: Boolean,
    xSmall: Boolean,
    // eslint-disable-next-line vue/require-default-prop
    to: {
      type: String
    },
    block: Boolean,
    outlined: Boolean
  },
  data() {
    return {}
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
