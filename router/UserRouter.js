const Router = require('express').Router
const UserController = require('../controller/UserController')

const router = new Router()

router.get('/data', UserController.sendData)
router.get('/products', UserController.sendProducts)

module.exports = router