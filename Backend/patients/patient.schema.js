const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({                       //schema=object
    email: {
        type: String,
        //required: true,
       // unique: true,
    },
    password: {
        type: String,
       // required: true,
    },
});  

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;