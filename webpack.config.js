var config = require('./package').config;

module.exports = {
    entry: {
        todo: './'+config.outputDir+'/'+config.sourceDir+'/todo/app.module.js'
    },
    output: {
        filename: '[name].js',
        path: './'+config.outputDir
    }
};