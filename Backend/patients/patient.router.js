const express = require("express");

const {createPatient, getPatients, getPatientById, updatePatient, deletePatient, getPatientbyEmail} = require("./patient.controller");

const router = express.Router();

router.post("/login", async (req, res) => {                        //does login info match in the database
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            res.status(400);                                       //400 something wrong with request, 500 request is fine but something is wrong with the fulfillment of request
            res.send({
                error: true,
                msg: 'email or password missing',
        });
        }else{
            const patient = await getPatientbyEmail(email);
            if(patient && patient.password && patient.password === password){
                res.status(200);
                res.send({
                    login: true,
                });
            }else{
                res.status(401);                                                //401 unauthorized access
                res.send({
                    login: false,
            })
        }
        }
    }catch(error){
        console.error("Error logging in", error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });   
    }
});

router.get("/", async (req,res) => {
    try{
        const patients = await getPatients();
        res.status(200);
        res.send(patients);
    }catch(error){
        console.error("Error fetching all the patients", error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });                                                       //throw the error so it can be caught at the global level
    }
});

router.get("/:patientId", async (req, res) => {
    try{
        const patientId = req.params.patientId;
        const patient = await getPatientById(patientId);
        res.status(200);
        res.send(patient);
    }catch(error){
        console.error("Error getting patient by Id", error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });
    }
});

router.post("/", async (req, res) => {
    try{
        console.log(req);
    const newPatient = await createPatient(req.body);
    res.status(200);                                                        //200 indicates success
    res.send(newPatient);
    }catch(error){
        console.error("Error creating new patient", req.body, error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });
    }
});

router.put("/:patientId", async (req, res) => {                                  //if just update, could use patch. But, it is update or insert
    try{
        const patientId = req.params.patientId;
        const updatedPatient = await updatePatient(patientId, req.body);
        res.status(200);
        res.send(updatedPatient);
    }catch(error){
        console.error("Error updating a new patient", req.body, error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });
    }
});

router.delete("/:patientId"), async (req, res) => {
    try{
        const patientId = req.params.patientId;
        const deletedPatient = await deletePatient(patientId);
        req.status(200);
        res.send("Patient deleted successfully");
    }catch(error) {
        console.error("Error deleting a patient", req.body, error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });
    }
};

module.exports = router;