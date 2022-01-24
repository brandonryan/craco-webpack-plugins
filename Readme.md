Allows you to modify the plugins section of webpack config.  
see https://webpack.js.org/configuration/plugins/ for all config options.

In `craco.config.js` file
```js
const webpack = require("webpack")
const webpackPlugins = require("craco-webpack-plugins")

//for example, if we need to add the process global to the browser
module.exports = {
    plugins: [{
        plugin: webpackPlugins,
        plugins: [
            new webpack.ProvidePlugin({
                process: "process/browser",
            }),
        ]
    }]
};
```