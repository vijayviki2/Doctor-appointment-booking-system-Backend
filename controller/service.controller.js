const { StatusCodes } =require('http-status-codes')
const Service = require('../model/service.model')
//get all service
const getServices = async (req,res) => {
    try{
        const data=  await Service.find({});

        res.status(StatusCodes.OK).json({length: data.length,service: data })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

//get single service
const getSingleService = async (req,res) => {
    try{
        let id = req.params.id
        let extService= await Service.findById({ _id: id})
            if(!extService)
        return res.status(StatusCodes.NOT_FOUND).json({ msg: "service id not found" })

        res.status(StatusCodes.OK).json({ service: extService})
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