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
        type: Object,
        default: {
            url: "https://tse4.mm.bing.net/th?id=OIP.KtahHX0mDy-mEQO16gKJdAAAAA&pid=Api&P=0&h=180"
        }

    },
    doctorId: {
        type: String,
        unique: true,
        default: ""
    },
    department: {
        type: String,
        default: ""
    },
   
    qualification:{
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    experience: {
        type: Number,
        default: 0
    },
    address: {
        type: Object,
        default: ""
    }
},{
    collection:  "doctors",
    timestamps: true
}) 

module.exports = mongoose.model("Doctor", doctorSchema)