const { StatusCodes } =require('http-status-codes')
const Doctor = require('../model/doctor.model')

//get doctor
const getDoctors = async (req,res) => {
    try{
        let doctors = await Doctor.Find({})
        res.status(StatusCodes.OK).json({ length : doctors.length, doctors })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
// singledoctor
const getSingle = async (req,res) => {
    try{
        let id = req.params.id
        let extDoc = await Doctor.findById({ _id: id})
        if(!extDoc)
            return res.status(StatusCodes.NOT_FOUND).json({ msg: "Requested Doctor id not found"})
        res.status(StatusCodes.OK).json({ msg: "get single doctor" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//add doctor
const addDoctor = async (req,res) => {
    try{
        let { email, mobile} = req.body

        if(!req.body)
        return res.status(StatusCodes.NOT_FOUND).json({ msg: "empty data not allowed,,"})
        let extEmail  = await Doctor.findOne({ email })
        if(extEmail)
            return res.status(StatusCodes.BAD_REQUEST).json({msg:`${email} already exists`})
       

        let extMobile = await Doctor.findOne({ mobile})
        if(extMobile)
            return res.status(StatusCodes.BAD_REQUEST).json({msg:`${mobile} already exists`})

        await Doctor.create(req.body)

        res.status(StatusCodes.OK).json({ msg: "doctors details added successfully" })

    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//update doctor
const updateDoctor = async (req,res) => {
    try{
        let id = req.params.id
        let { email, mobile} = req.body

        let extEmail  = await Doctor.findOne({ email })
        if(extEmail)
            return res.status(StatusCodes.BAD_REQUEST).json({msg:`${email} already exists`})
       

        let extMobile = await Doctor.findOne({ mobile})
        if(extMobile)
            return res.status(StatusCodes.BAD_REQUEST).json({msg:`${mobile} already exists`})

            await Doctor.findByIdAndUpdate({ _id: id }, req.body)
        res.status(StatusCodes.OK).json({ msg: "doctor info updated successfully" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//delete doctor
const deleteDoctor = async (req,res) => {
    try{

        let id = req.params.id

        const extDoc = await Doctor.findById({  _id : id})
            if(!extDoc)
                returnres.status(StatusCodes.NOT_FOUND).json({msg: `requested idnot found`})

                await Doctor.findByIdAndDelete({ _id:id})

        res.status(StatusCodes.OK).json({ msg: "doctor info delted successfully" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { getDoctors,getSingle, addDoctor, updateDoctor, deleteDoctor }