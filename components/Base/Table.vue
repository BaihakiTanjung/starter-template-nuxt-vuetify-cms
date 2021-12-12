<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="8"
    class="elevation-1"
    dense
    :show-select="showSelect"
  >
    <template v-for="(slot, name) in $scopedSlots" #[name]="item">
      <slot :name="name" v-bind="item"></slot>
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    showSelect: {
      type: Boolean,
      default: false
    }
  }
}
</script>
