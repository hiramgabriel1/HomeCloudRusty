const express = require("express");
const path = require("path")
// const { reset } = require("nodemon");
const app = express();
const router = require("./router/router.js")
const multer = require("multer");
const mimeTypes = require("mime-types");
// const ngrok = require('ngrok');

//storage multer 
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function(req, file, cb){
        cb("",Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype))
    }
})

// config multer
const upload = multer({
    storage: storage
})

// server run
app.listen(3000, function(){    
    console.log("escuchando en el puerto 3000")
})

// upload files
app.post("/fileUpload", upload.single('file'), function(req,res,err){
    try {
        res.send("<a href='/upload'>return</a>");  

        console.log("upload file".concat(JSON.stringify(storage)));      
    } catch (err) {
        console.log(err)
        res.send(`error al subir el fichero ${err}`);
    }
})

// config template engine
app.set("views", "./views")
app.set("view engine", "pug")

// files static
app.use(express.static("./css"));
app.use(express.static("./views"));
app.use(express.static("./assets"));
app.use(express.static("./controller"));
app.use(router)