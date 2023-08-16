const express = require('express')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const connectDb = require('./db/connect')

require('dotenv').config()
const PORT= process.env.PORT

const app  = express()

//body parser middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//middleware
app.use(cors())
app.use(cookieparser(process.env.API_ACCESS_SECRET))

// default route
app.get(`/`,(req,res) => {
    res.send(
        `<h1  style="text-align:center;color:blue;">Welcome to DOCTOR_APPOINTMENT_BOOKING_API</h1>`
    )
})

//routes
app.use(`/api/admin`, require('./route/admin.route'))
app.use(`/api/appointment`, require('./route/appointment.route'))
app.use('/api/auth', require('./route/auth.route'))
app.use('/api/doctor', require('./route/doctor.route'))
app.use('/api/service', require('./route/service.route'))
app.use('/api/user', require('./route/user.route'))
app.use('/api/slot', require('./route/slot.route'))

//portlisten

app.listen(PORT, async  () => {
    console.log(`service started @ http://locahost:${PORT}`)
    await connectDb()
})