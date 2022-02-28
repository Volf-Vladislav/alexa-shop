const Router = require('express').Router
const ClientController = require('../controller/ClientController')

const router = new Router()

router.get('/', ClientController.main)
router.get('/dashboard', ClientController.dashboard)
router.get('/createproduct', ClientController.product)
router.get('/profile', ClientController.profile)
router.get('/landing', ClientController.landing)
router.get('/auth', ClientController.authorization)
router.get('/reg', ClientController.reg)

module.exports = router