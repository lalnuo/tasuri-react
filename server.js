var app = require('./app');
var cors = require('cors');
app.use(cors());

var debug = require('debug')('backend:server');
var http = require('http');
var models = require("./models");


app.set('port', process.env.PORT || 3000);
app.disable('etag');

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
  });
});
