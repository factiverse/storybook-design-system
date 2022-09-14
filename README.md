[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://factiverse.github.io/storybook-design-system/?path=/story/introduction--page)

# Factiverse Design System

Factiverse Design System is a reusable component library that helps Factiverse contributors build UIs faster. The goal is to make building durable UIs more productive and satisfying.

It was built following the [design system tutorial](https://storybook.js.org/tutorials/design-systems-for-developers) by Storybook.

To look at the components and/or get started developing check out the GitHub Pages [deployment](https://factiverse.github.io/storybook-design-system/).

Testing automatic publishing

### Get Started
Requirements:
```
Node version >= 17.7.1
NPM version >= v8.5.2
```

To run storybook locally:
```
cd storybook-design-system
npm i
npm run storybook
```

### Create a new component using the generate script

To create a new component run the following:

```
cd storybook-design-system
npm i
npm run generate <Name of Component>
cd src/components/<Name of Component>
```
### Structure

All components should be stored in the `src/components` folder.

Dependencies:
- Are required to run.
- npm install from a directory that contains the package.json
- npm install $package on any other directory
- installed transitively:  if A requires B, and B requires C, then C gets installed, otherwise, B could not work, and neither would A.

PeerDependencies:
- Can run sub-dependencies on different versions.
- give a warning if missing on npm install, and you have to solve the dependency yourself manually.

DevDependencies:
- Required to develop.
- also installed on npm install on a directory that contains package.json, unless you pass the --production flag
- are not installed transitively. E.g. we don't need to test B to test A, so B's testing dependencies can be left out.

There are also plugins for rollup (used for packaging the component library for publishing to NPM):
- rollup-plugin-peer-deps-external - To prevent bundling peerDependencies
- @rollup/plugin-node-resolve - Resolve third party dependencies in node_modules
- @rollup/plugin-commonjs - To convert commonjs modules into ES6
- @rollup/plugin-typescript - To transpile our Typescript code in JS
- rollup-plugin-postcss - To handle our css
- @rollup/plugin-image - Handle bundling
- rollup-plugin-terser - To minify our bundle
- rollup-plugin-visualizer - Visualizer for the rollup package. Outputs a bundle-analysis.html
- @rollup/plugin-json - Handle JSON when bundling package.
- rollup-plugin-copy - copy the fonts and style

### Installing Component Library Locally

To test whether your package will work locally:
```
cd storybook-design-system
npm run build:local
```

The output should be a build folder as well as a tarball file, eg:
`factiverse-design-system-0.2.4.tgz`.

To link this package into a project, you will need to link the above tarball file
to your project as follows:

Let's say you have another project (topics) on your machine that you want to try installing the component library into without having to first publish the component library. In the topics directory, you can run:
```
npm i --save ../factiverse-design-system-0.2.4.tgz
```
which will install the local component library as a dependency in topics. It'll then appear as a dependency in package.json like:
```
  ...
  "dependencies": {
    ...
    "factiverse-design-system": "file:../factiverse-design-system-0.2.4.tgz",
    ...
  },
  ...
```
Your components can then be imported and used in that project.

NOTE: After installing the component library locally, you may run into:

- Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

You might have mismatching versions of React and the renderer (such as React DOM)
You might be breaking the Rules of Hooks
You might have more than one copy of React in the same app See for tips about how to debug and fix this problem.
This is the most commonly encountered problem people face when installing the library locally. This is most likely due to the third reason: You might have more than one copy of React in the app.

Normally when a library is published, dev dependencies are excluded. However, when the library is symlinked, all local dev depdendencies are persisted in the libraries node_modules (includes React). Your bundler may see two versions of React, one in the consuming app and one in the symlinked library. The solution is to have the component library use the React version in the consuming app. So from your component library folder, run:
```
npm link ../topics/node_modules/react
```
OR, if you are using Webpack in app you can follow this GitHub comment.

Read more about this issue here.

### Publishing
Hosting via NPM
First, make sure you have an NPM account and are logged into NPM using the npm login command.

Then update the name field in package.json to reflect your NPM package name in your private or public NPM registry. Then run:
```
npm publish
```
The "prepublishOnly": "npm run build" script in package.json will execute before publish occurs, ensuring the build/ directory and the compiled component library exist.

### Alternative hosting on GitHub

You can then install your library into other projects by running:
```
npm i --save git+https://github.com/factiverse/storybook-design-system.git#branch-name
OR

npm i --save github:factiverse/storybook-design-system#branch-name
```
### Usage
The public NPM package: @factiverse/storybook-design-system with the TestComponent component created in this repository.

Usage of the component (after the library installed as a dependency into another project) will be:
```
import React from "react";
import { TestComponent } from "@factiverse/design-system";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <TestComponent theme="primary" />
  </div>
);

export default App;
```

### References

(NPM Package)[https://www.npmjs.com/package/@factiverse/design-system]
(rollup)[https://rollupjs.org/guide/en/]
(rollup plugins)[https://github.com/rollup/plugins]