var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 9090);
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 1}));


var server = app.listen(app.get('port'), function(){
    console.log('Express server listening on ' + app.get('port'));
});
