const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const doctorRouter = require("./doctors/doctor.router");
const patientRouter = require("./patients/patient.router");

const{connectToDatabase, disconnectFromDatabase} = require("./db");

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());                                   //middleware (data available on req.body in router.js)


app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.use("/doctors", doctorRouter);
app.use("/patients", patientRouter);


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