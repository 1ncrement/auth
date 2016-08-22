/**
 * Created by user on 22.08.2016.
 */
var webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config'),
	
	path = require('path'),
	mainConfig = require('./config'),
	bodyParser = require('body-parser'),

	express = require('express'),
	app = express(),
	router = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(router);

app.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		error: {
			status: err.status,
			message: err.message
		}
	});
});

app.listen(mainConfig.server.port, ()=>{
	console.info(`Listening on port ${mainConfig.server.port} http://localhost:${mainConfig.server.port}/`);
});