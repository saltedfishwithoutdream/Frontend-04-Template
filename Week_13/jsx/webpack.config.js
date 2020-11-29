module.exports = {
    entry: './animation-demo.js',
    // output: {
    //     filename: 'main.js'
    // },
    devServer:{
        // contentBase:false,
        //我这里没有设置contentBase，个人研究contentBase必须指向存在的bundle.js文件所在目录，
        //因为这里是开发模式，所以dist目录并不存在，所以用false.
        host:'localhost',
        port:'8080',
        inline:true,//webpack官方推荐
        watchOptions: {
            aggregateTimeout: 2000,//浏览器延迟多少秒更新
            poll: 1000//每秒检查一次变动
        },
        compress:true,//一切服务都启用gzip 压缩
        historyApiFallback:true,//找不到页面默认跳index.html
        hot:true,//启动热更新，必须搭配new webpack.HotModuleReplacementPlugin()插件
        open:true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
                    }
                }
            }
        ]
    },
    mode: 'development'
}