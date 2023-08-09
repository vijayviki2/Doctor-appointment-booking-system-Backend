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
            url: "https://tse4.mm.bing.net/th?id=OIP.KtahHX0mDy-mEQO16gKJdAAAAA&pid=Api&P=0&h=180"
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