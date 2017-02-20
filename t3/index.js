var express = require("express");
var app = express();

var v0 = require("./versions/v0");
var v1 = require("./versions/v1");

//console.log(v0, v1);

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.use("/v0",v0.router);
app.use("/v1",v1.router);


// Handle 404 error.
// The last middleware.
app.use("*",function(req,res){
    res.status(404).send('404');
});

// Listen to this Port

app.listen(3000,function(){
    console.log("Live at Port 3000");
});