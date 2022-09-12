[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://factiverse.github.io/storybook-design-system/?path=/story/introduction--page)

# Factiverse Design System

Factiverse Design System is a reusable component library that helps Factiverse contributors build UIs faster. The goal is to make building durable UIs more productive and satisfying.

It was built following the [design system tutorial](https://storybook.js.org/tutorials/design-systems-for-developers) by Storybook.

To look at the components and/or get started developing check out the GitHub Pages [deployment](https://factiverse.github.io/storybook-design-system/).

Testing automatic publishing

### Create a component using the generate script

To create a new component, from the root folder, run the following:

```
cd storybook-design-system
npm i
npm run generate <Name of Component>
cd src/components/<Name of Component>
```
### Structure

All components should be stored in the `src/components` folder.

- @rollup/plugin-node-resolve - Resolve third party dependencies in node_modules
- @rollup/plugin-commonjs - To convert commonjs modules into ES6
- @rollup/plugin-typescript - To transpile our Typescript code in JS
- rollup-plugin-peer-deps-external - To prevent bundling peerDependencies
- rollup-plugin-postcss - To handle our css
- rollup-plugin-terser - To minify our bundle
- rollup-plugin-copy - copy the fonts and style


Dependencies:

PeerDependencies:

DevDependencies:

### Run this component library

Use the following config on your local machine:
Node version <= v16.13.1
NPM version <= v8.1.2

To run these components locally, use

View the component library in Storybook:

```
npm install
npm run storybook
```

View the bundled folder:

```
npm run build
```

To publish to NPM:

```
npm publish --access public
```
