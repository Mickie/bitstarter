var express = require('express');
var app = express();
var fs = require ('fs');
var fileName="index.html"
app.use(express.logger());
var FileExist = function(thefileName){
    return fs.existsSync(thefileName);

}

var returnFileData = function(thefileName){
    if (FileExist(thefileName)==true){
        var theReturnBuff=fs.readFileSync(thefileName);
        var buffer= new Buffer(theReturnBuff);
        var data=buffer.toString('utf8',0,buffer.length);
        console.log(data);
        return data;
    }
    else{
        console.log("the file doesn't exist");
        return "the file doesn't exist";
    }

}

var theFileData= returnFileData(fileName);

app.get('/', function(request, response) {
    console.log(theFileData);
    response.send(theFileData);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
