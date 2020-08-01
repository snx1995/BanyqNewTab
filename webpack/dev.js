const common = require('./common');

module.exports = Object.assign(common, {
    mode:'development',
    devServer: {
        host: 'localhost',
        hot: true,
        open: false,
        port: 8888
    }
})