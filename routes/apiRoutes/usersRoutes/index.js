const router = require('express').Router();
const usersController = require('./../../../controllers/usersController');

// /api/users
router.route('/')
    .get(usersController.getUsers)
    .post(usersController.createUser)

// /api/users/:email
router.route('/:email')
    .get(usersController.getUserByEmail)

module.exports = router;