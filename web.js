var express = require('express');
var fs=require('fs');
var app = express();
app.use(express.logger());
var getContent=function(FileName){
    fs.readFile(FileName, function (err, data) {
        if (err) throw err;
        return data;
    });
}
var buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));

app.get('/', function(request, response) {
  response.send(getContent('/index'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
