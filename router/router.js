const router = require("express").Router();

router.get("/", function(req, res){
    res.render("index", {title: 'Home Cloud'});
})

router.get("/upload", function(req, res){
    res.render("uploadFile")
})

router.get("/notes", function(req, res){
    res.render("uploadNote")
})

router.get("/directorys", function(req, res){
    res.render("directorys")
})
module.exports = router;