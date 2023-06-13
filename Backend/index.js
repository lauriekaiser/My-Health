const express = require("express");

const{connectToDatabase, disconnectFromDatabase} = require("./db")

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("Hello World!");
});


connectToDatabase()                         //connect to database then do whatever else we want to do
    .then(() => {
        app.listen(port, ()=>{
            console.log("Express Server Listening at port: " + port);               //we don't want to start express server before connection is established (api response will fail because it can't talk to mongodb)
        });
    }).catch((error) => {
        console.log("Error starting the server", error);
    });

process.on("SIGINT", async () => {                              //SIGINT: program is crashing or i am asking it to stop
    try{
        await disconnectFromDatabase();
        process.exit(0);
    }catch(error){
        console.log("Error shutting down the server", error);
        process.exit(1);
    }
})