var express = require("express");

var router = express.Router();

// Provide all routes here, this is for Home page.

router.get("/",function(req,res){
    res.json({"version" : "v0", "success": true});
});

router.get("/user",function(req,res){
    res.json({"name":"Florin", "email": "florin.spataru@arobs.com"});
});

router.post("/user",function(req,res){
    res.json({"success":true, "name":"Florin", "email": "florin.spataru@arobs.com"});
});


exports.router = router;