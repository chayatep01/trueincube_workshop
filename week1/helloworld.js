
console.log("node is running");
//use http
var http = require('http');
//try to use external lib
var uppercase = require('upper-case');
var abc = require('./course');
//try urlparse**
var url = require('url');
var fs = require('fs');


var server = http.createServer(function (req,res) {
  //**
  fs.readFile('./index.html',function(err,content){

    res.end(content);
  });

  //res.end("hello " + url.parse(req.url ,true).query.name)
  //res.end(uppercase("Hello world"));
    //res.end(uppercase(abc.myCourse()));
});
//create sever
server.listen(3030,function () {
  console.log("server is listening");
});
