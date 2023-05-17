const path = require('path');

module.exports = {
    entry: './assets/js/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    externals: {
        jquery: 'jQuery'
    }
};