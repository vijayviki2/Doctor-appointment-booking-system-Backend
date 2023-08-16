const serviceRoute = require('express').Router()
const { getServices,getSingleService, addService, upadateService, deleteService } = require('../controller/service.controller')


// validate kogin authentication
const auth = require('../middleware/auth.middleware')
const doctorAuth = require('../middleware/doctor.role')

// -- all services-- get
serviceRoute.get(`/all`,auth, getServices)

// -- singleservices -- get
serviceRoute.get(`/single/:id`,auth,  getSingleService)

// add new service -- post
serviceRoute.post(`/add`,auth, doctorAuth, addService)

// update service--- patch
serviceRoute.patch(`/update/:id`,auth, doctorAuth, upadateService)

// delete service -- delete
serviceRoute.delete(`/delete/:id`,auth,doctorAuth, deleteService)

module.exports = serviceRoute