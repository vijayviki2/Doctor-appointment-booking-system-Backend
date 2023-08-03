const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: { 
        type: String,
        required: true,
        unique: true},
    image:  {

    },
    doctorId: {

    },
    department: {
        type: String,
        required: true,
    },
    qualification:{},
    description: {},
    experience: {},
    address: {}
},{
    collection:  "doctors",
    timestamps: true
}) 

module.exports = mongoose.model("Doctor", doctorSchema)