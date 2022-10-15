const SignUp = require('../models/register');
const bcrypt = require('bcrypt');

exports.loginUser = async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    await SignUp.findOne({ username })
        .then(user => {
            if (!user) return res.status(400).json({ msg: `User ${username} does not exist`})

            bcrypt.compare(password, user.password, (err, data) => {
                if (err) throw err

                if (!data) {
                    return res.status(401).json({ msg: `Authentication for ${username} failed`})
                }
                res.status(200).json({auth : true})
            })
        })
}