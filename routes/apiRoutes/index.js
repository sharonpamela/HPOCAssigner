const router = require('express').Router();
const usersRoutes = require('./usersRoutes');

// /api/users
router.use('/users', usersRoutes);

module.exports = router;