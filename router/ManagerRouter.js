const Router = require('express').Router
const ManagerController = require('../controller/ManagerController')

const router = new Router()

router.post('/product', ManagerController.postProduct)

module.exports = router