const jwt = require("jsonwebtoken")

const auth = (req, res , next) => {
    try {
    if(req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(" ")[1]
        console.log("token in auth",token)
        const decode = jwt.verify(token, 'shhhh')
        console.log(decode)
        req.user = decode
    }

    
    } catch (error) {
        console.log(error)
    }
    

    return next()
}

module.exports = {auth}