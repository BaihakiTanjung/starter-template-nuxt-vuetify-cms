export const state = () => ({
  items: [
    { title: 'Home', to: '/auth/home', icon: 'mdi-home' },
    { title: 'Component', to: '/auth/component', icon: 'mdi-card' },
    { title: 'Fetch', to: '/auth/fetch', icon: 'mdi-restart' },
    { title: 'Table', to: '/auth/table', icon: 'mdi-table' },
    {
      title: 'Dropdown',
      to: '/auth/about',
      icon: 'mdi-form-dropdown',
      children: [
        { title: 'Dropdown 1', to: '/auth/home', icon: 'mdi-form-dropdown' },
        {
          title: 'Dropdown 2',
          to: '/auth/home',
          icon: 'mdi-form-dropdown',
          children: [
            {
              title: 'Dropdown 2.1',
              to: '/auth/home',
              icon: 'mdi-form-dropdown',
            },
            {
              title: 'Dropdown 2.2',
              to: '/auth/home',
              icon: 'mdi-form-dropdown',
            },
          ],
        },
        { title: 'Dropdown 3', to: '/auth/home', icon: 'mdi-form-dropdown' },
      ],
    },
  ],
})
