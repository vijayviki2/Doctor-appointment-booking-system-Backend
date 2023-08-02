const { statusCodes, StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

// controller
const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization') 

        if(!token)
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `Token not found`})

        jwt.verify(token,process.env.API_ACCESS_SECRET, (err,resp) => {
            if(err)
            return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Token expired.. login again"})
            
            // assigning user id into required variable
            req.userId = resp._id

            next() // transfer response tonext controller


            
            // res.json({ resp })
        })

    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = auth