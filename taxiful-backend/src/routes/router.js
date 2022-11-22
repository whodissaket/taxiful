const router = require('express').Router();


// Users routes

router.use(require('./user'));
router.use(require('./maps'))
router.use(require('./drivers'))

module.exports = router;