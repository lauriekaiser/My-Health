const express = require("express");

const {createDoctor, getDoctors} = require("./doctor.controller");

const router = express.Router();

router.get("/", async (req,res) => {
    try{
        const doctors = await getDoctors();
        res.status(200);
        res.send(doctors);
    }catch(error){
        console.error("Error fetching all the doctors", error);
        throw error;                                                        //throw the error so it can be caught at the global level
    }
});

router.post("/", async (req, res) => {
    try{
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
        res.end();
    }
});

module.exports = router;