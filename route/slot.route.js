const slotRoute = require('express').Router()
const { getSlots,getSingle,createSlot,updateSlot,deleteSlot} = require('../controller/slot.controller')

const auth = require('../middleware/auth.middleware')
const doctorAuth = require('../middleware/doctor.role')

slotRoute.get(`/all`,auth,getSlots)

slotRoute.get(`/single/:id`,auth,getSingle)

slotRoute.post(`/create`,auth,doctorAuth,createSlot)

slotRoute.patch(`/update/:id`,auth,doctorAuth,updateSlot)

slotRoute.delete(`/delete/:id`,auth,doctorAuth,deleteSlot)

module.exports = slotRoute