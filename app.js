var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var env = process.env.NODE_ENV === 'PRODUCTION' ? 'prod' : 'dev';

var config = require('./webpack.config.' + env);
var routes = require('./routes/index');
var users = require('./routes/users');
var purchases = require('./routes/purchases');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/purchases', purchases);

module.exports = app;
