<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
        <h1>testing</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "blank",
  data: () => ({ drawer: null }),
}
</script>
