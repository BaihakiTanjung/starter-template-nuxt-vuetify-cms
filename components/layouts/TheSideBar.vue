<template>
  <v-card shaped class="pa-3" elevation="0" style="height: 100vh">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5 text-center"
          >Logo or Image</v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-list dense nav rounded>
      <div v-for="item in items" :key="item.title">
        <v-list-item v-if="!item.children" :to="item.to" rounded link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group v-else no-action>
          <template #activator>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <div v-for="child in item.children" :key="child.title">
            <v-list-item v-if="!child.children" rounded link :to="child.to">
              <v-list-item-icon>
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group v-else sub-group no-action>
              <template #activator>
                <v-list-item-icon class="mr-2">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <div v-for="child2 in child.children" :key="child2.title">
                <v-list-item
                  v-if="!child2.children"
                  :to="child2.to"
                  rounded
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ child.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="child2.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-list-group>
          </div>
        </v-list-group>
      </div>
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
    },
  },
}
</script>
<style lang="scss" scoped>
.v-card {
  border-radius: 0px 20px 20px 0 !important;
}
</style>
