var express = require('express');
var app = express();

app.use(express.static('Resources/'))

app.get('/', express.static(__dirname + "/views/"));

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
