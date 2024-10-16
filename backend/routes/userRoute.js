const userCtrl = require('../controller/userController');

const router = require('express').Router();


router.post('/register' , userCtrl.register)
router.post('/login' , userCtrl.login)
router.post('/logout' , userCtrl.logout)
 

module.exports = router;