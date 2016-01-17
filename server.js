var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var purchases = require('./routes/purchases');
var app = express();
var cors = require('cors');
if (!process.env.NODE_ENV) require('./config/hot_reloading')(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/purchases', purchases);

var models = require("./models");

app.set('port', process.env.PORT || 3000);
app.disable('etag');

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});
