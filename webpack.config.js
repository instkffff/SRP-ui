const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
        }, {
            test: /\.(scss)$/,
            use: [{
                // Adds CSS to the DOM by injecting a `<style>` tag
                loader: 'style-loader'
            }, {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'css-loader'
            }, {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'resolve-url-loader'
            },{
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader',
                options: {
                    plugins: function() {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                // Loads a SASS/SCSS file and compiles it to CSS
                loader: 'sass-loader'
            }]
        }]
    }
};