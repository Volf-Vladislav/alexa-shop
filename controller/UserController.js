const Product = require('../model/Product')
const User = require('../model/User')
const tokenService = require('../service/TokenService')

class UserController {
    async sendData(req, res) {
        const token = tokenService.getCookieToken(req)
        const tokenPayload = tokenService.decodeToken(token)

        try {
            const user = await User.findOne({ _id: tokenPayload.id })
            if(user) {
                res.json({name: user.username, mail: user.mail, phone: user.phone})
            }
            else {
                res.status(403).json({message: 'invalid token'})
            }
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }

    async sendProducts(req, res) {
        try {
            const product = await Product.find()
            res.json({product})
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }
}

module.exports = new UserController()