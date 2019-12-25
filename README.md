# About

This is a template project with all required dependencies for creating Arrival application:
* [core-ui-kit](https://github.com/cybernated/core-ui-kit) - a library of all UI components.

# Getting started

1. Copy current folder.
2. Fill the `package.json` with data for your project.
3. `yarn install` - install the dependencies.
4. `yarn dev` - start on the localhost at 3000 port.

# Why do we have that dependencies?

* `@cybernated/core-ui-kit` - arrival ui-component library.
* `react-router-dom` - DOM bindings for React Router.
* `react` - provides api for create and control ui-components.  
* `react-dom` - provides DOM-specific methods to step out from react-world
to DOM-world and is used on top level of application.
* `styled-components` - it is way to organize styles as isolated components
(in particular, elements of main component).

# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes lint rules, config for typescript.
* `@eigenspace/jest-screenshot-testing` - ui-screenshot testing library.
* `@eigenspace/commit-linter` - linter for commit messages.
* `@types/*` - contains type definitions for specific library.
* `clean-webpack-plugin` - it's used for clean bundle before run building.
* `html-webpack-plugin` - it generates index.html based on template and includes all required js dependencies 
with hashed names.
* `ts-loader` - it's used to load typescript code with webpack. 
* `jest` - testing framework to write unit specs (including snapshots).
* `jest-styled-components` - a set of utilities for testing Styled Components with Jest.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
* `ts-jest` - it lets you use Jest to test projects written in TypeScript.
* `husky` - used for configure git hooks.
* `react-test-renderer` - render React components to pure JavaScript objects.
* `eslint` - it checks code for readability, maintainability, and functionality errors.
* `eslint-plugin-eigenspace-script` - Includes set of script linting rules and configuration for them.
* `lint-staged` - used for configure linters against staged git files.
* `prettier` - style components formatter.
* `webpack` - it creates app bundle for dev. mode and production. 
* `webpack-cli` - cli for webpack, provides commands for tasks. 
* `webpack-dev-server` - provide environment for development, including hot-reloading feature.
* `whatwg-fetch` - this project is a polyfill for `window.fetch`.

# Project structure

Project should adhere to this structure:
```
    /config - files for configuration project modules
    /dev - folder where we store supporting resources, like font projects, scripts
    /src - files used by this application (modules, templates, ligic)
        /components - set of components
            /<concrete component> - folder that incapsulates all component's files
                 <concrete component>.enums.ts - set of component enums
                 <concrete component>.spec.tsx - tests for component
                 <concrete component>.tsx - component logic
        /environments - sets of constants for different application's environments
                    environment.prod.ts
                    environment.ts
        index.tsx - entry for react applicaiton            
                     
    package.json - project configuration, contains project information, dependencies and settings
    yarn.log - file fixing specific dependency numbers
    README.md
    <other root configuration files> - for example, jest.config.ts, .gitignore, ...                                             
```

Structure example:

```
    /config
        /jest
            /setup
                console.setup.js
        /webpack
            webpack.config.dev.js
            webpack.config.prod.js            
    /dev
        /scripts
            /common
                common.js
            /git-hooks
                pre-commit.js
    /src
        /common
            /assets
                /favicon
                    favicon.ico
            /enums
                component-state.enum.ts
                request-method.enum.ts
            /services
                /app
                    login.app.service.ts
                /data
                    base.data.service.ts
            /types
                common.ts
                dictionary.ts
            /utils
                utils.ts
        /components
            /login
                 login.enums.ts 
                 login.spec.tsx
                 login.tsx
        /environments
            environment.prod.ts
            environment.ts   
    jest.config.ts
    package.json
    yarn.lock
    README.md
```
