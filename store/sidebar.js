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
        {
          title: 'Dropdown 1',
          to: '/auth/dropdown/1',
          icon: 'mdi-form-dropdown',
        },
        {
          title: 'Dropdown 2',
          to: '/auth/dropdown/2',
          icon: 'mdi-form-dropdown',
          children: [
            {
              title: 'Dropdown 2.1',
              to: '/auth/dropdown/21',
              icon: 'mdi-form-dropdown',
            },
            {
              title: 'Dropdown 2.2',
              to: '/auth/dropdown/22',
              icon: 'mdi-form-dropdown',
            },
          ],
        },
        {
          title: 'Dropdown 3',
          to: '/auth/dropdown/3',
          icon: 'mdi-form-dropdown',
        },
      ],
    },
  ],
})
