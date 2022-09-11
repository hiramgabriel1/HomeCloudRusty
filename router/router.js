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

module.exports = router;