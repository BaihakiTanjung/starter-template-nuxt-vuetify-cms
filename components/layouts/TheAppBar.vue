<template>
  <div>
    <!-- Navigation Drawer Mobile -->

    <v-navigation-drawer
      v-model="drawer"
      dark
      color="primary"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <img src="~assets/images/logo-sitama-pkp.svg" alt="" srcset="" />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav rounded>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          rounded
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="mx-5 my-1" color="white" flat>
      <v-app-bar-nav-icon
        class="is-dekstop"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <PageTitle>{{ pageTitle }}</PageTitle>

      <v-spacer></v-spacer>

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
            <v-avatar color="brown" size="48">
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3 class="mt-3">{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout"> Disconnect </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com'
    },
    drawer: null
  }),
  computed: {
    items() {
      return this.$store.state.sidebar.items
    },
    pageTitle() {
      return this.$store.state.pageTitle
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
