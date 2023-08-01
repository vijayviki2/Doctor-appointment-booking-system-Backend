const { StatusCodes } = require('http-status-codes')


// all registeres users
const allRegUsers =  async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "all RegUsers" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}


// all registered doctors
const allRegDoctors =  async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "allRegDoctors" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

//all appointment
const allAppointments =  async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "allAppointments" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

//managing roles
const changeRole =  async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "changeRole" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { allRegUsers, allRegDoctors, allAppointments, changeRole }