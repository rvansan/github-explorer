const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval-source-map': 'source-map',
	entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de origem com diretório
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'), // diretório de destino
		filename: 'bundle.js' // arquivo de destino
	},
	resolve: {
		extensions : ['.js', '.jsx'], // tanto js quanto jsx precisam ser lidos
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		})
	],
	module : { 
		rules: [ // array de regras para cada tipo de arquivo
			{
				test: /\.jsx$/, // \.jsx$ -> verifica se o arquivo acaba com ".jsx"
				exclude: /node_modules/, //exclui a pasta node_modules dessa verifcação
				use: 'babel-loader' // loader para os arquivos javascript 
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