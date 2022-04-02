export const state = () => ({
  items: [
    { title: 'Menu', to: '/auth/home', icon: 'mdi-home' },
    {
      title: 'Dropdown',
      to: '/auth/about',
      icon: 'mdi-account-circle',
      children: [
        { title: 'Dropdown 1', to: '/auth/home', icon: 'mdi-home' },
        {
          title: 'Dropdown 2',
          to: '/auth/home',
          icon: 'mdi-home',
          children: [
            { title: 'Dropdown 2.1', to: '/auth/home', icon: 'mdi-home' },
            { title: 'Dropdown 2.2', to: '/auth/home', icon: 'mdi-home' },
          ],
        },
        { title: 'Dropdown 2', to: '/auth/home', icon: 'mdi-home' },
      ],
    },
  ],
})
