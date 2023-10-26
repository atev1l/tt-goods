const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'development',
 entry: './src/main.js',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: '/',
 },
 module: {
  rules: [
   {
    test: /\.vue$/,
    loader: 'vue-loader'
   },
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env']
     }
    }
   },
   {
    test: /\.scss$/,
    use: [
     'style-loader',
     'css-loader',
     'sass-loader'
    ]
   },
   {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
     {
      loader: 'url-loader',
      options: {
       limit: 8192,
       fallback: 'file-loader',
       name: 'images/[name].[hash:7].[ext]'
      },
     },
    ],
   },
  ]
 },
 plugins: [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
   template: './src/index.html'
  })
 ],
 resolve: {
  alias: {
   'vue$': 'vue/dist/vue.esm.js'
  }
 },
 devServer: {
  historyApiFallback: true,
 }
};
