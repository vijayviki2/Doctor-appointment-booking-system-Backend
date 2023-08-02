const { StatusCodes, NOT_FOUND } = require('http-status-codes')
const User = require('../model/user.model')
const bcrypt = require('bcryptjs')
const createAccessToken = require('../util/token')

//register
const register = async (req,res) => {
    try{

        const extEmail = await User.findOne({ email: req.body.email })
            if(extEmail)
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${req.body.email} already exist`})
        const extMobile = await User.findOne({ mobile: req.body.mobile})
        if(extMobile)
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${req.body.mobile} already exist`})

        const encPass = await bcrypt.hash(req.body.password,10) // password hash(10 bit)


        const newUser = await User.create ({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: encPass

        })

        return res.status(StatusCodes.OK).json({ msg:"User registered successfully",  newUser })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

//login
const login = async (req,res) => {
    try{
        const user = req.body

        //user email esist or not
        const extUser = await User.findOne({email: user.email})
        if(!extUser)
          return res.status(StatusCodes.NOT_FOUND).json({ msg:  `User ${user.email} doesn't exist.`})

        //   verify the password
        const isMatch = await bcrypt.compare(user.password,extUser.password)
        if(!isMatch)
            return res.status(StatusCodes.UNAUTHORIZED).json({ msg: `Passwords aren't matched`})

        // check user is active
        if(!extUser.isActive)
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: `sorry your account is blocked `})

        // generate token

        const accessToken = createAccessToken({ _id: extUser._id })

        res.status(StatusCodes.OK).json({ msg: "Login Succesful", accessToken})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//logout
const logout = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "logout" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//token 
const getToken = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "getToken" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
//cuurent logged user info
const loggedUser = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "loggedUser" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { register, login, logout, getToken, loggedUser }
