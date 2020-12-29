const path = require('path');
const HtmlPlhgin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
// const glob = require('glob');
// const PurifyCSSPlugin = require('purifycss-webpack');
module.exports = {
    //开发环境配置，production是生产环境（是压缩代码，线上用这个） development开发环境(开发时使用)
    mode:'development',
    //入口文件配置
    entry:{
        index:'./src/index.js',
        main:"./src/main.js",
    },
    //出口文件配置
    output:{
        //绝对路径(如下参数是两个下划线，“”里是要打包到的文件夹)
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        //设置图片路径配置（绝对路径）
        publicPath:'http://localhost:8081/'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8081,
    },
    plugins:[
        // 处理html的打包
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            //minify：是对html文件进行压缩，去掉属性的双引号
            minify:{
                // removeAttributeQuotes:true,
                //去掉所有空行空格
                // collapseWhitespace:true,
                hash:true,
            }

        }),
        //重新打包，每次构建先删除再重新打包dist文件夹
        // new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename:'css./[name].css'
        }),
        //清楚未使用的css
        // new PurifyCSSPlugin({
        //     paths:glob.sync(path.join(__dirname,'src/*.html')),
        // })

    ],
    //配置loader
    module:{
        rules:[
            {
                //针对css的处理规则
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                       loader: 'css-loader',
                    //    options:{ importloaders: 1}
                    },
                    // 'postcss-loader',
                ]
            },
            { //针对图片文件的处理规则
            test: /\.png|jpg|gif$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/',
                        esModule:false
                    }
                }
            ]
            },{
                /* 对html文件的处理 */
                test:/\.htm|html$/i,
                loader:'html-withimg-loader',
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {/* 针对js文件的处理（es6=>es5 */
                test:/\.js$/,
                use:[{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }],
                //不把node_modulest中的文件进行转换
                exclude:/node_modules/


            }
            
        ]
            
        

    }
}