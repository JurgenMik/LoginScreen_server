const SignUp = require('../models/register');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {

    const saltPassword = await bcrypt.genSalt(5)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signUpUser = new SignUp({
        username: req.body.username,
        password: securePassword,
        email: req.body.email
    })
    await signUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
}