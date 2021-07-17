const express = require('express');
const router = express.Router();

// Import routes
const {index} = require('../controllers/default');

/**
 * Index page
 * @method GET
 */

router.get('/', index);


// Export router
module.exports = router;