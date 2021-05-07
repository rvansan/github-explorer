const path = require('path')

module.exports = {
	mode: 'development', // ambiente da aplicação
	entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de origem com diretório
	output: {
		path: path.resolve(__dirname, 'dist'), // diretório de destino
		filename: 'bundle.js' // arquivo de destino
	},
	resolve: {
		extensions : ['.js', '.jsx'], // tanto js quanto jsx precisam ser lidos
	},
	module : { 
		rules: [ // array de regras para cada tipo de arquivo
			{
				test: /\.jsx$/, // \.jsx$ -> verifica se o arquivo acaba com ".jsx"
				exclude: /node_modules/, //exclui a pasta node_modules dessa verifcação
				use: 'babel-loader' // loader para os arquivos javascript 
			}
		]
	}
}