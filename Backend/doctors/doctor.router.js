const express = require("express");

const {createDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor, getDrbyEmail} = require("./doctor.controller");

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
            const doctor = await getDrbyEmail(email);
            if(doctor && doctor.password && doctor.password === password){
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
        const doctors = await getDoctors();
        res.status(200);
        res.send(doctors);
    }catch(error){
        console.error("Error fetching all the doctors", error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });                                                       //throw the error so it can be caught at the global level
    }
});

router.get("/:doctorId", async (req, res) => {
    try{
        const doctorId = req.params.doctorId;
        const doctor = await getDoctorById(doctorId);
        res.status(200);
        res.send(doctor);
    }catch(error){
        console.error("Error getting doctor by Id", error);
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
    const newDoctor = await createDoctor(req.body);
    res.status(200);                                                        //200 indicates success
    res.send(newDoctor);
    }catch(error){
        console.error("Error creating new doctor", req.body, error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });
    }
});

router.put("/:doctorId", async (req, res) => {                                  //if just update, could use patch. But, it is update or insert
    try{
        const doctorId = req.params.doctorId;
        const updatedDoctor = await updateDoctor(doctorId, req.body);
        res.status(200);
        res.send(updatedDoctor);
    }catch(error){
        console.error("Error updating a new doctor", req.body, error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });
    }
});

router.delete("/:doctorId"), async (req, res) => {
    try{
        const doctorId = req.params.doctorId;
        const deletedDoctor = await deleteDoctor(doctorId);
        req.status(200);
        res.send("Doctor deleted successfully");
    }catch(error) {
        console.error("Error deleting a doctor", req.body, error);
        res.status(500);
        res.send({
            error: true,
            msg: JSON.stringify(error),
        });
    }
};

module.exports = router;