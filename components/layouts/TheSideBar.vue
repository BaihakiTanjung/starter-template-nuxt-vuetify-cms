<template>
  <v-card class="pa-5" color="primary" elevation="0" style="height: 100vh">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5 text-center">Logo or Image</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list dense nav rounded>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" rounded link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    items() {
      return this.$store.state.sidebar.items
    }
  }
}
</script>
<style lang="scss" scoped>
.v-card {
  border-radius: 0px 20px 20px 0;
}
</style>
