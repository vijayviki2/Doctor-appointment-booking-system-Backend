const doctorRoute = require('express').Router()
const { getDoctors,getSingle, addDoctor, updateDoctor, deleteDoctor } = require('../controller/doctor.controller')

// -- read alldoctor info--- get
doctorRoute.get(`/all`, getDoctors)

// --read  singledoctor info -- get
doctorRoute.get(`/single/:id`, getSingle)

// -- add new doctor info --- post
doctorRoute.post(`/add`, addDoctor)

///--- update doctor info -- patch
doctorRoute.patch(`/update/:id`, updateDoctor)

//---delete doctor info -- delete
doctorRoute.delete(`/delete/:id`, deleteDoctor)

module.exports = doctorRoute