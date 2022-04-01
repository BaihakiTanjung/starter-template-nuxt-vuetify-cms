<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app dark color="primary">
      <LayoutsTheSideBar></LayoutsTheSideBar>
    </v-navigation-drawer>

    <LayoutsTheAppBar @sidebar="handleSidebar"></LayoutsTheAppBar>

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      clipped: false,
      drawer: true,
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
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com'
      },
      // drawer: null
    }
  },
  methods: {
    handleSidebar(val) {
      this.drawer = val
    },
    logout() {
      console.log('logout')
    }
  },
}
</script>
<style lang="scss" scoped>
.v-card {
  border-radius: 0px 20px 20px 0;
}
</style>
