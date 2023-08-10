const mongoose = require('mongoose')

const serviceSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    desc:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type: Object,
        default:{
            url:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
        }
    },
    price:{
        type: Number,
        required:  true,
        default: 0
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    gender:{
        type: String,
        required: true,
        trim: true
    },
    doc_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

},{
    collection: "services",
    timestamps: true
})

module.exports = mongoose.model("Service",serviceSchema)