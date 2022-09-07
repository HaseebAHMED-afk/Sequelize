const { signUp } = require('../Controllers/User')

const router = require('express').Router()



router.post('/singup', signUp)

module.exports = router