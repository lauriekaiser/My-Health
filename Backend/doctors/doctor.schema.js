const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({                       //schema=object
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

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;