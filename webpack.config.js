
const Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')
    .enableSourceMaps(true)

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create web/build/app.js and web/build/app.css
    .addEntry('js/app', './assets/js/main.jsx')
    .addStyleEntry('css/app', [
        './assets/scss/global.scss',
    ])

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    // enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

    // enable react loader
    .enableReactPreset()

// create hashed filenames (e.g. app.abc123.css)
// .enableVersioning()

// allow sass/scss files to be processed
    .enableSassLoader(function(sassOptions) {}, {
        resolveUrlLoader: false
    })
    .addRule({test: /\.json$/, loader: 'json-loader'})
    .addRule({test: /\.scss$/, loader: 'sass-loader'})
;

// export the final configuration
let webpackConfig = Encore.getWebpackConfig();

module.exports = webpackConfig;