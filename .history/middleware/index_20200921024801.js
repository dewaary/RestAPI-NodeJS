var express = require('express');
var auth = require('./auth');
var router = express.Router();

router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login)

router.get('/api/v1/secret', verifcation(2), auth.secretPage);

module.exports = router;