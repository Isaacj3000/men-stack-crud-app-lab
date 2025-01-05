const User = require('../models/user');
const bcrypt = require('bcrypt')

function signUp(req, res) {
    res.render('auth/sign-up')
}