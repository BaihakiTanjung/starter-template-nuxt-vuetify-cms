<template>
  <v-app-bar dense flat app>
    <v-app-bar-nav-icon @click="handleSidebar"></v-app-bar-nav-icon>

    <PageTitle>{{ pageTitle || 'Page' }}</PageTitle>

    <v-spacer></v-spacer>

    <v-btn icon @click="toggleTheme">
      <v-icon>{{
          $vuetify.theme.dark
            ? 'mdi-moon-waxing-crescent'
            : 'mdi-white-balance-sunny'
      }}</v-icon>
    </v-btn>

    <v-btn icon>
      <v-badge content="1" value="1" bottom color="red" overlap>
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </v-btn>

    <v-btn icon class="mr-3">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-menu bottom min-width="200px" rounded offset-y>
      <template #activator="{ on }">
        <v-btn icon x-large v-on="on">
          <v-avatar color="brown" size="24">
            <v-img src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1">
            </v-img>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar color="brown" size="24">
              <v-img
                src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1">
              </v-img>
            </v-avatar>
            <h3 class="mt-3">{{ user.fullName }}</h3>
            <p class="text-caption mt-1">{{ user.email }}</p>
            <v-divider class="my-3"></v-divider>
            <v-btn depressed rounded text>Edit Account</v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn depressed rounded text @click="logout">Logout</v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
    drawer: null,
  }),
  computed: {
    items() {
      return this.$store.state.sidebar.items
    },
    pageTitle() {
      return this.$store.state.pageTitle
    },
  },

  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
    handleSidebar() {
      this.$emit('sidebar', (this.drawer = !this.drawer))
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('useDarkTheme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>
