var express = require("express");

var router = express.Router();

// Provide all routes here, this is for Home page.

router.get("/",function(req,res){
    res.json({"version" : "v1", "success": true});
});

router.post("/me",function(req,res){
    res.json({"name":"Florin", "email": "florin.spataru@arobs.com"});
});


exports.router = router;