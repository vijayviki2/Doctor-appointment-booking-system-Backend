const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user",
        enum: ["user","doctor","admin"]
    },
    image: {
        type: Object,
        default: {
            url: "http://extendedevolutionarysynthesis.com/avatar-1577909_960_720/"
        }
    },
    address:{
        type: Object,
        default: {
            city:" test city"
        }
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("users",userSchema)