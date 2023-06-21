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
const getDoctorById = async (doctorId) => {
    try{
        const doctor = await Doctor.findById(doctorId);
        return doctor;
    }catch(error){
        console.error("Error reading doctor by Id", error);
        throw error;
    }
}

//read specific doctor by email
const getDrbyEmail = async (email) => {
    try{
        const doctor = await Doctor.findOne({email: email});
        return doctor;
    }catch(error){
        console.error("Error reading doctor by email");
        throw error;
    }
};


//update a doctor
const updateDoctor = async (doctorId, doctorData) => {
    try{
        const updatedDoctor = Doctor.findByIdAndUpdate(doctorId, doctorData, {
            new: true,                                                                              //update OR insert: if dr is new, add them in 
        });
        return updatedDoctor
    }catch(error){
        console.error("Error updating Doctor", error);
        throw error;
    }
}

//delete a doctor
const deleteDoctor = async (doctorId) => {
    try{
        const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
        return deleteDoctor;
    }catch(error){
        console.error("Error deleting the doctor");
        throw error;
    }
};

module.exports = {
    createDoctor,
    getDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor,
    getDrbyEmail
}