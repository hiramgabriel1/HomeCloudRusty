const mysql = require("mysql");

const conex = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "notesCloudApp"
})

// connect bd with sql
conex.connect(function(error) {
    if(error){
        console.error(`error en conexión ${error.stack}`);
        return;
    }
    console.log(`conexión establecida con éxito ${conex.threadId}`);
});

// close conection
conex.end();