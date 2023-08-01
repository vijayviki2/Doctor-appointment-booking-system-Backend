const serviceRoute = require('express').Router()
const { getServices,getSingleService, addService, upadateService, deleteService } = require('../controller/service.controller')


// -- all services-- get
serviceRoute.get(`/all`, getServices)

// -- singleservices -- get
serviceRoute.get(`/single/:id`,  getSingleService)

// add new service -- post
serviceRoute.post(`/add`,  addService)

// update service--- patch
serviceRoute.patch(`/update/:id`, upadateService)

// delete service -- delete
serviceRoute.delete(`/delete/:id`, deleteService)

module.exports = serviceRoute