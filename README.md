# File Share - 1.0.0
File Share: Version 1.0.0 - Estable.

### 1° Paso: Instalar Laravel

composer create-project --prefer-dist laravel/laravel 'name'

### 2° Paso: Prepara entorno para React.js
    

    ```
    composer require laravel/ui

    // Generate basic scaffolding...
    php artisan ui react

    // Generate login / registration scaffolding...
    php artisan ui react --auth
    ```

### 3° Paso: Instalar dependencias de Redux

    ```
    npm install --save react-redux redux redux-thunk
    ```

### 4° Paso: Configurar Babel

    ```
    npm install --save-dev @babel/plugin-transform-arrow-functions
    npm install --save-dev @babel/plugin-proposal-class-properties
    ```

#### Crear babel.config.js en la raiz del proyecto con el siguente contenido

    ```
    module.exports = {
    presets: [ "@babel/preset-env", "@babel/preset-react" ],
    plugins: [ "@babel/plugin-transform-arrow-functions", "@babel/plugin-proposal-class-properties" ]
    }
    ```
### Configuración de seguridad con ApiToken

    ```
    https://github.com/gonpineiro/auth-api-laravel

    ```


### Dependencias

#### Desarrollo

    ```
    "devDependencies": {
         "@babel/plugin-proposal-class-properties": "^7.8.3",
        "@babel/plugin-transform-arrow-functions": "^7.8.3",
        "@babel/preset-react": "^7.0.0",
        "axios": "^0.19",
        "bootstrap": "^4.0.0",
        "cross-env": "^7.0",
        "jquery": "^3.2",
        "laravel-mix": "^5.0.1",
        "lodash": "^4.17.13",
        "popper.js": "^1.12",
        "react": "^16.13.1",
        "react-dom": "^16.2.0",
        "resolve-url-loader": "^3.1.0",
        "sass": "^1.15.2",
        "sass-loader": "^8.0.0"
    },
    ```

#### Producción

    ```
    "dependencies": {
        "@material-ui/core": "^4.10.0",
        "@material-ui/icons": "^4.9.1",
        "react-redux": "^7.2.0",
        "react-router-dom": "^5.2.0",
        "redux": "^4.0.5",
        "redux-thunk": "^2.3.0"
    }
    ```
