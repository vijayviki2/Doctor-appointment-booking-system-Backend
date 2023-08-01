const { StatusCodes } =require('http-status-codes')
//get all service
const getServices = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "get service" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

//get single service
const getSingleService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "get service" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//add service
const addService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "add service" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//update service
const upadateService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "update service" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//delete service
const deleteService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "delete service" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { getServices,getSingleService, addService, upadateService, deleteService }