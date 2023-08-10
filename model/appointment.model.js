const mongoose = require('mongoose')

const appointmentSchema =  new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    app_date:{
        type: Date,
        default:  Date.now()
    },
    service_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    doc_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    app_date:{
        type: Date,
        default:  Date.now(),
    },
    app_status:{
        type: String,
        default:'pending',
        enum:["pending","booked","cancelled"]
    },
    confirm:{
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
    },{
    collection:  "appointments",
    timestamps: true
})

module.exports = mongoose.model("Appointment", appointmentSchema )