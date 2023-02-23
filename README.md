# planter-svelte

A Svelte web project starter made by creators of [Planter](https://planter.dev) 🌱

<!-- TODO: update this link -->
Read the full documentation on [planter.dev](https://planter.dev/planter-svelte)

## Contents
- [Getting Started](#getting-started)
- [Styling with Sass](#styling-with-sass)
- [Config](#config)

---

# Getting Started

Planter Svelte is a web project starter that uses [SvelteKit](https://kit.svelte.dev/) and comes with starter styles built out with [Sass](https://sass-lang.com/) as well as a few simple components to serve as both examples and for use in your project.


Get started by running these two commands to install dependencies and startup the local dev server:
```shell
npm install
npm run dev
```

<!-- callout -->
Make sure to set up your editor for Svelte language support. We recommend the [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) extension, but there's also [support for other editors](https://sveltesociety.dev/tools/#editor-support) (Submlime, Vim, WebStorm).


## Project Structure
There are two basic concepts of SvelteKit:
- Each page of your app is a Svelte component
- You create pages by adding files to the src/routes directory of your project.

### `/src`
The home for all your project code.

### `/static`
Static assets, such as images or external scripts.

### `/src/routes`
Create pages by adding files to the `src/routes` directory of your project. Read more about [routing](https://kit.svelte.dev/docs/routing) in SvelteKit. 
Note: at the root of `src/routes`, there's a file named `__layout.svelte`; Planter Svelte uses this file to apply global styles to all pages. Read more about [layouts](https://kit.svelte.dev/docs/layouts) in SvelteKit.

### `/src/components`
A place to house your components. This directory includes a few simple components to get you started.

### `/src/styles`
Global stylesheets, Sass variables, mixins, and functions. 

### `/src/routes/demo` & `/src/components/demo`
The `src/routes/demo` page showcases how SvelteKit can work, while also documenting the components and default styles we've included. All demo content is contained within `src/routes/demo` and `src/components/demo` and can be freely deleted. 

---

# Styling with Sass
Planter Svelte's styles provide a working default and are easily extensible for your project. Using [Sass](https://sass-lang.com/), we've set up a system of tokens and basic styles to get you started.

Sass has also been set up to be used within your components, for local-scoped styling. All of the default components have their styles contained within their `.svelte` file.

## Sass & Svelte
Sass has been configured to be supported within of Svelte components. Just add the `lang="scss"` to the style tag within a component:
```html
<style lang="scss">
  .some {
    &:hover {
      color: red;
    }
  }
</style>
```
Note: You can use global tokens or mixins from `/src/styles` in this context. The token and mixin index files are configured to automatically be imported into each Svelte component style block that has the `lang="scss"` attribute.

### `:global` Rule
Styles inside of Svelte component style blocks can be global scoped with the `:global` rule. This can make adding custom styles a bit easier, when you want to do so in a more typical "CSS way" (even if it's not the "Svelte way"). Read more about global style in the [`svelte-preprocess` docs](https://github.com/sveltejs/svelte-preprocess#global-rule).

```html
<script>
  import Text from '@components/link.svelte'
</script>

<div class="scope-style">
  <Link>My Link</Link>
  <a href="link.com">My vanilla link</p>
</div>

<style lang="scss">
  .scoped-style {
  }

  .scope-style p {
    /* 
      this is all local scope, and only gets applied to a p element 
      that's rendered explicitly by this component 
    */
  }

  .scope-style :global(p) {
    /* 
      for a global scoped <p>, i.e.: .scoped-style > p

      this selects any <p> that's a direct child of .scope-style,
      including a nested <p> that's rendered by another component
    */    
  }
</style>
```

## Global Styles
`style.scss`

The project's global styles use `style.scss` as entry file for all partials, tokens, mixins, and functions. By default, the existing sub-directories of `src/styles` use [index files](https://sass-lang.com/documentation/at-rules/import#index-files) to import their contents into `style.scss`.

Note: import order matters when using tokens, mixins, and functions as intended. (Make sure they come first!)

## Base
`_base.scss`

The base styles include high-level element overrides and global typographic defaults. Most of these styles utilize the tokens.

## Tokens
`/tokens`

Tokens are a set of variables that allow you to easily reuse values across your styles to maintain consistency and quickly make sweeping changes. The `tokens` directory contains all the token files used across the global styles. Planter Svelte's tokens are meant to exist as a system of design tokens and provide a framework that designers are familiar with.

## Mixins
`/mixins`

Mixins are reusable styles that can be used in the stylesheets. Planter Svelte provides a set of useful mixins for breakpoints, as well as some pulled from Bootstrap such as the flex grid classes.

Learn more about [Sass mixins](https://sass-lang.com/documentation/at-rules/mixin).

### Breakpoint Mixins

Planter Svelte includes breakpoint mixins that makes writing responsive styles easier. The mixins work with the breakpoint map to generate media queries.

```scss
// src/styles/tokens/_breakpoints.scss
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

```scss
// Basic usage example
.foo {
  color: black;
  @include breakpoint(sm, up) {
    color: red;
  }
}
/* Output:

.foo {
  color: black;
  @media (min-width: 576px) {
    color: red;
  }
}

*/
```

```scss
// Breakpoint directions:
//   - `up` and `min` map to a `min-width` media query
//   - `down` and `max` map to a `max-width` media query

// Usage: breakpoint(size, direction)
//    size: breakpoint size key
//    direction: responsive direction
@include breakpoint(sm, up) { /* ... */ }
@include breakpoint(lg, down) { /* ... */ }

// Using sizes with default direction ('up' a.k.a. min-width)
@include breakpoint(sm) { /* ... */ }

// Between two sizes
// Usage: breakpoint(minSize, maxSize, between)
@include breakpoint(sm, md, between) { /* ... */ }

// Direction aliases
@include bp-up(sm) { /* ... */ }
@include bp-down(md) { /* ... */ }

// Alternative direction alias syntax: min, max
@include bp-min(md) { /* ... */ }
@include bp-max(sm) { /* ... */ }

// Alias for between two sizes
@include bp-between(sm, md) { /* ... */ }

// General shorthand alias for `breakpoint` mixin
@include bp(sm) { /* ... */ }
@include bp(sm, up) { /* ... */ }
@include bp(sm, md, between) { /* ... */ }
```

The default direction can be changed in the mixin delcaration by replacing the `direction` argument's default value with a different breakpoint key. 

```scss
// src/styles/mixins/_breakpoints.scss
@mixin breakpoint($breakpoint, $direction: <default>) {
  // ...
}
```

### Grid (Flex)
The optional grid mixins are used to generate [Bootstrap's grid classes](https://getbootstrap.com/docs/5.0/layout/grid/), e.g., `.container`, `.row`, `.col` and their breakpoint variants. `styles/_grid.scss` uses the mixins in `_container.scss` and `_grid.scss`. By default, these grid classes are disabled but can be enabled in `styles/tokens/_grid.scss` by `$enable-grid-classes: true;`.

## Functions
`_functions.scss`

Learn more about [Sass functions](https://sass-lang.com/documentation/at-rules/function).

### Spacing
Planter Svelte includes a spacing function, which allows you to use shorthands to access the spacing tokens, as well as generate values using the spacer token with modifiers. The shorthands that you can pass as arguments match the keys used in `$spacer-size-map`.

```scss
// src/tokens/_spacing.scss

// Base spacing value
$spacer: .5rem !default;    // 8px

// Spacing sizes
$spacer-1:  $spacer * .5;   // 4px
$spacer-2:  $spacer * 1;    // 8px
$spacer-3:  $spacer * 2;    // 16px
$spacer-4:  $spacer * 3;    // 24px
$spacer-5:  $spacer * 4;    // 32px
$spacer-6:  $spacer * 6;    // 48px
$spacer-7:  $spacer * 8;    // 64px
$spacer-8:  $spacer * 9;    // 72px

// Spacing map
// Use the map's keys to access the spacing sizing within space()
$spacer-size-map: (
  xs: $spacer-1,
  sm: $spacer-2,
  md: $spacer-3,
  lg: $spacer-4,
  xl: $spacer-5,
  xxl: $spacer-6,
  massive: $spacer-7,
  super: $spacer-8
);
```

```scss
// Access your spacing tokens by key
.foo {
  padding: space(sm); // -> padding: 8px
}

// Supports multiple arguments
.bar {
  padding: space(sm md sm); // -> padding: 8px 16px 8px
}

// Using modifiers (multiples of your base `$spacer` value)
.some {
  padding: space(1 2 1); // -> padding: calc($spacer * 1) calc($spacer * 2) calc($spacer * 1)
}

// Mixing keys and modifiers works too
.other {
  padding: space(sm 2 md); // -> padding: 8px calc($spacer * 2) 16px
}
```

`sp()` is also provided as an alias for `space()`
```scss
.foo {
  padding: sp(sm); // -> padding: 8px
}
```

## Grid
`_grid.scss`

Planter Svelte includes optional grid (flexbox) classes from Bootstrap and their mixin and variable depedencies, making it easy for you to customize without bringing _all_ of Bootstrap.

This file generates Bootstrap `.container`, `.row`, `.col` classes and their breakpoint variants, using the [grid mixins](#grid-flex) (`styles/mixins/_grid.scss`). By default, these grid classes are disabled but can be enabled in `styles/tokens/_grid.scss` by `$enable-grid-classes: true;`.

Learn more about [Bootstrap's grid classes](https://getbootstrap.com/docs/5.0/layout/grid/).

## Normalize
`_normalize.scss`

Styles that offer useful defaults and normalization across browsers. 

Learn more about [Noramlize.css](https://github.com/necolas/normalize.css)

---

# Config
All configuration files can be found at the project root.

## `svelte.config.js`
The `svelte.config.js` file is the main config file for your project, which allows you to configure various project and build options which are consumed by SvelteKit. This config isn't required to run your project, but we have included a few simple things that we can't live without.

```js
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'$styles': resolve(__dirname, "./src/styles/"),
					'$components': resolve(__dirname, "./src/components/"),
				}
			}
		}
	},
  // A Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, 
  // Stylus, CoffeeScript, TypeScript, Pug and much more.
  // https://github.com/sveltejs/svelte-preprocess
	preprocess: [
		sveltePreprocess({
			scss: {
        // Paths to entry files
				includePaths: ['./src/styles', './node_modules'],
        // Adds our global variables, functions, and mixins to every style block with lang="scss"
				prependData: `
					@import "./src/styles/_functions.scss";
					@import "./src/styles/tokens/_index.scss";
					@import "./src/styles/mixins/_index.scss";
				`
			},
			postcss: {
				plugins: [
					autoprefixer(),
				]
			}
		}),
	]
}
```

## Other Files
SvelteKit also comes with config files for tools such as [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/).
