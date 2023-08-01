const userRoute = require('express').Router()
const { readAllUsers, getSingleUser } = require('../controller/user.controller')


// -- read alluser -- get
userRoute.get(`/all`, readAllUsers)

// -- read single user-- get
userRoute.get(`/single/:id`, getSingleUser)

module.exports = userRoute