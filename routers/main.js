const {Router} = require('express')
const router = Router()

/* Controllers */
const {home} = require('../controllers/mainController')


router.get("/",home)

module.exports = router