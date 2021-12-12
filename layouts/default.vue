<template>
  <!-- App.vue -->

  <!-- <v-navigation-drawer app> -->
  <!-- -->
  <!-- </v-navigation-drawer> -->
  <v-app class="main">
    <v-row>
      <v-col class="is-mobile" md="3">
        <LayoutsTheSideBar></LayoutsTheSideBar>
      </v-col>
      <v-col md="9">
        <!-- App Bar -->
        <LayoutsTheAppBar></LayoutsTheAppBar>
        <!-- End App Bar -->

        <!-- Sizes your content based upon application components -->
        <v-main>
          <!-- Provides the application the proper gutter -->
          <v-container>
            <!-- If using vue-router -->
            <nuxt />
          </v-container> </v-main
      ></v-col>
    </v-row>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
