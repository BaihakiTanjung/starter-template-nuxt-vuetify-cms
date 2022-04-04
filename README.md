# Starter Template Nuxt Vuetify CMS

<p align="center">
  <img src="https://user-images.githubusercontent.com/904724/59509947-c14eca80-8eb2-11e9-807c-14e7cc72eecc.png" height="250" />
</p>

Starter template Nuxt 2 and Vuetify, Service Pattern, Composition APi, default page like Login, Forgot Password, OTP Code, and Auth System using Nuxt Auth

Built with:
* [Nuxt 2](https://nuxtjs.org/)
* [Nuxt Auth 5](https://auth.nuxtjs.org/)
* [Nuxt Axios](https://axios.nuxtjs.org/)
* [Nuxt DotEnv](https://www.npmjs.com/package/@nuxtjs/dotenv)
* [Nuxt Composition Api](https://composition-api.nuxtjs.org/)
* [Vuetify 2](https://vuetifyjs.com/)
* [Babel](https://babeljs.io/)
* [Vue Loading Overlay](https://www.browsersync.io/)
* [ESLint](http://eslint.org/)
* [Include Media](https://eduardoboucas.github.io/include-media)
* [SASS](http://sass-lang.com/)
* [Webpack 2](https://webpack.js.org/)
* [Yarn](https://yarnpkg.com/en/docs/install)


## Folder structure

| Folder name        | Children           | Goal  |
| ------------- |:-------------:| -----:|
| /api     | apiUrl | Wrapper Axios Call Methods |
|/services |      | Return Axios evocation. Services |
| /assets | /scss      |    |
|  | /images      |    |
|  | /fonts | | 
| /consts | consts      |  Constant Variable  |
| /components | .vue      |  Vue component  |
| /helpers | Utils      |  Utilty Functions  |
| /layouts | .vue      |  Nuxt layout. Contains views.  |
| /middleware | | Nuxt Middleware |
| /pages | .vue      | View. Rendered inside layout.   |
| /plugins |    |  Plugins run before instantiating Vue root. Plugins are declared inside nuxt.config.js  |
| /static |       |     |
| /store |      | Vuex   |
| /payloads |  | Mode Data |

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
