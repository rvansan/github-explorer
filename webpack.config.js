const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval-source-map': 'source-map',
	entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de origem com diretório
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		hot: true
	},
	output: {
		path: path.resolve(__dirname, 'dist'), // diretório de destino
		filename: 'bundle.js' // arquivo de destino
	},
	resolve: {
		extensions : ['.js', '.jsx'], // tanto js quanto jsx precisam ser lidos
	},
	plugins:[
		isDevelopment && new ReactRefreshWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		})
	].filter(Boolean),
	module : { 
		rules: [ // array de regras para cada tipo de arquivo
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins:[
							isDevelopment && require.resolve('react-refresh/babel')
						].filter(Boolean)
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	}
}