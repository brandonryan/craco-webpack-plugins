Allows you to modify the plugins section of webpack config.  
see https://webpack.js.org/configuration/plugins/ for all config options.

In `craco.config.js` file
```js
import webpackPlugins from "craco-webpack-plugins"
import webpack from "webpack"

//for example, if we need to add the process global to the browser
export default {
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