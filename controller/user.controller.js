const { StatusCodes } =require('http-status-codes')
// get all user data
const readAllUsers = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "delete service" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
// get single user data
const getSingleUser = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "get single user" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { readAllUsers, getSingleUser }