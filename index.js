export function overrideWebpackConfig({webpackConfig, cracoConfig, pluginOptions}) {
    if (webpackConfig.plugins === undefined) {
        webpackConfig.plugins = []
    }

    webpackConfig.plugins.push(pluginOptions.plugins)
    return webpackConfig
}