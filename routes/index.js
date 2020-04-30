const router = require('express').Router();

const apiRoutes = require('./apiRoutes');

//  /api
router.use('/api', apiRoutes);

module.exports = router;