export default function ({ store, route, redirect }) {
  if (route.path === '/login') {
    if (store.state.auth.loggedIn) {
      redirect('/auth/home')
    }
  }
}
