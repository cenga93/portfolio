const express = require('express');
const router = express.Router();

// Import routes
const {index} = require('../controllers/default');

/**
 * @method GET
 */
// Index page -- route
router.get('/', index);


// Export router
module.exports = router;