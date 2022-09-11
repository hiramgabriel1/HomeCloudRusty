const express = require("express");
const path = require("path")
const { reset } = require("nodemon");
const app = express();
const router = require("./router/router.js")
const multer = require("multer");
const mimeTypes = require("mime-types");

//storage multer 
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function(req, file, cb){
        cb("",Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype))
    }
})

// lol
// config multer
const upload = multer({
    storage: storage
})

// server run
app.listen("3000", function(req, res){
    console.log("escuchando en el puerto 3000")
})

app.post("/files", upload.single('file'), function(req,res){
    res.send("todo bien")
})

// config template engine
app.set("views", "./views")
app.set("view engine", "pug")

// files static
app.use(express.static("./css"));
app.use(express.static("./views"));
app.use(express.static("./assets"));
app.use(router)