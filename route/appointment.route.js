const { getAppointments, getSingleAppointment,addAppointment, updateAppointment, deleteAppointment } = require('../controller/appointment.controller')

const appointmentRoute = require('express').Router()

// validate kogin authentication
const auth = require('../middleware/auth.middleware')
// validate admin role
const adminAuth = require('../middleware/admin.role')
const doctorAuth = require('../middleware/doctor.role')

//read all
appointmentRoute.get(`/all`,auth, getAppointments)

// read single
appointmentRoute.get(`/single/:id`,auth, getSingleAppointment)

// create appointment post
appointmentRoute.post(`/add`,auth,addAppointment)

//edit appointment
appointmentRoute.patch(`/update/:id`,auth,doctorAuth, updateAppointment)

// delete appointment
appointmentRoute.delete(`/delete/:id`,auth,adminAuth, deleteAppointment)

module.exports = appointmentRoute