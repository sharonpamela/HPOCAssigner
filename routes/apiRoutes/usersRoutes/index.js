const router = require('express').Router();
const usersController = require('./../../../controllers/usersController');

// /api/users
router.route('/')
    .get(usersController.getUsers)
    .post(usersController.createUser)

module.exports = router;