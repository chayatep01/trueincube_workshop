
console.log("node is running");
//use http
var http = require('http');
//try to use external lib
var uppercase = require('upper-case');
var abc = require('./course');
var server = http.createServer(function (req,res) {
  //res.end(uppercase("Hello world"));
  res.end(uppercase(abc.myCourse()));
});
//create sever
server.listen(3030,function () {
  console.log("server is listening");
});
