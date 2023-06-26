//functions for CRUD operations using schema

const Patient = require("./patient.schema");                   

//create a new patient
const createPatient = async (patientData) => {
    try{
        const newPatient = new Patient(patientData);
        await newPatient.save();
        return newPatient;
    }catch(error){
        console.error("Error creating new patient", error);                
    }
};

//read all the patients
const getPatients = async () => {
    try{
        const patients = await Patient.find();                                  //should return all patients that exist in db
        return patients;
    }catch(error){
        console.error("Error reading all the patients", error);
        throw error;
    }
};

//read a specific patient
const getPatientById = async (patientId) => {
    try{
        const patient = await Patient.findById(patientId);
        return patient;
    }catch(error){
        console.error("Error reading patient by Id", error);
        throw error;
    }
}

//read specific patient by email
const getPatientbyEmail = async (email) => {
    try{
        const patient = await Patient.findOne({email: email});
        return patient;
    }catch(error){
        console.error("Error reading patient by email");
        throw error;
    }
};


//update a patient
const updatePatient = async (patientId, patientData) => {
    try{
        const updatedPatient = Patient.findByIdAndUpdate(patientId, patientData, {
            new: true,                                                                              //update OR insert: if patient is new, add them in 
        });
        return updatedPatient
    }catch(error){
        console.error("Error updating Patient", error);
        throw error;
    }
}

//delete a patient
const deletePatient = async (patientId) => {
    try{
        const deletedPatient = await Patient.findByIdAndDelete(patientId);
        return deletePatient;
    }catch(error){
        console.error("Error deleting the patient");
        throw error;
    }
};

module.exports = {
    createPatient,
    getPatients,
    getPatientById,
    updatePatient,
    deletePatient,
    getPatientbyEmail
}