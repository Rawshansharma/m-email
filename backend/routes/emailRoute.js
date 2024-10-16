const emailCtrl = require('../controller/emailController');
const isAuthenicated = require('../middleware/isAuthenticated');

const router = require('express').Router();


router.post('/create' ,isAuthenicated , emailCtrl.createEmail);
router.delete('/delete/:id' , isAuthenicated, emailCtrl.deleteEmail);
router.get('/getallemails' , isAuthenicated, emailCtrl.getAllEmailById);


module.exports = router;