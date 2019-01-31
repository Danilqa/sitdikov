# About

This is a template project with all required dependencies for creating Arrival application:
* [core-ui-kit](https://github.com/cybernated/core-ui-kit) - a library of all UI components.

# Getting started

1. Copy current folder.
2. Fill the `package.json` with data for your project.
3. `yarn install` - install the dependencies.
4. `yarn dev` - start on the localhost at 3000 port.

# Why do we have that dependency?

* `react` - provides api for create and control ui-components.  
* `react-dom` - provides DOM-specific methods to step out from react-world
to DOM-world and is used on top level of application.
* `core-ui-kit` - Arrival library of UI-components.

# Why do we have that dev dependency?

* `@types/*` - contains type definitions for specific library.
* `clean-webpack-plugin` - it's used for clean bundle before run building.
* `html-webpack-plugin` - it generates index.html based on template and includes all required js dependencies.
* `ts-loader` - it's used to load typescript code with webpack. 
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
* `webpack` - it creates app bundle for dev. mode and production. 
* `webpack-cli` - cli for webpack, provides commands for tasks. 
* `webpack-dev-server` - provide environment for development, including hot-reloading feature.

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
        index.ts - entry for react applicaiton            
                     
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
                styles.setup.js
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
                    layout-maker.app.service.ts
                /data
                    base.data.service.ts
            /types
                common.ts
                dictionary.ts
                styles.ts
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
                