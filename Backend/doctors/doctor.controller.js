//functions for CRUD operations using schema

const Doctor = require("./doctor.schema");                   

//create a new doctor
const createDoctor = async (doctorData) => {
    try{
        const newDoctor = new Doctor(doctorData);
        await newDoctor.save();
        return newDoctor;
    }catch(error){
        console.error("Error creating new doctor", error);                  //getting error here in postman
        throw error;
    }
};

//read all the doctors
const getDoctors = async () => {
    try{
        const doctors = await Doctor.find();                                  //should return all doctors that exist in db
        return doctors;
    }catch(error){
        console.error("Error reading all the doctors", error);
        throw error;
    }
};

//read a specific doctor

//update a doctor

//delete a doctor

module.exports = {
    createDoctor,
    getDoctors,
}