const tokenService = require('../service/TokenService')
const Product = require('../model/Product')

class ManagerController {
    async postProduct(req, res) {
        const token = tokenService.getCookieToken(req)

        if (token) {
            const tokenPayload = tokenService.decodeToken(token)
            if (tokenPayload.role == 'ADMIN') {
                const { title, category, content, price, img } = req.body

                const product = new Product({ title: title, category: category, content: content, price: price, img: img })
    
                await product.save()
                res.status(200).json({ message: 'Опубликовано', isSucsess: 'true' })
            }
            
        }
        else {
            res.json({message: 'Доступ запрещен'})
        }
    }
}

module.exports = new ManagerController()