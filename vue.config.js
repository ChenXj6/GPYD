const webpack = require("webpack");
module.exports = {
    publicPath:'./', // <---这里会修改webpack的outPath.publicPath
    configureWebpack: {
        //支持jquery
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ],
    },
};
 
