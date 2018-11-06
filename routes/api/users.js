const express = require('express');
const router = express.Router();

// Load User Model
const User = require('../../models/User');


//@route GET api/users/test
//@desc Tests users route
//@access Public
router.get('/test', (req, res) => res.json({
    msg: "Users Works"
}));

//@route GET api/users/register
//@desc Register user
//@access Public
router.get('/register', (req, res) => {
    User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    email: 'Email already exists'
                });
            }
        });
});

module.exports = router;