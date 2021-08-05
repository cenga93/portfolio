const express = require('express');
const router = express.Router();

// Import routes
const {index, contact, sendMessage} = require('../controllers/default');
const projectController = require("../controllers/projects")
/**
 * @name Index
 * @method GET
 */
// router.get('/', index);

/**
 * @name Contact
 * @method GET
 */
router.get('/contact', contact);

/**
 * @name Contact
 * @method POST
 */
router.post('/contact', sendMessage);

/**
 * @name Project
 * @method POST
 */
router.post('/', projectController.create);

/**
 * @name Project
 * @method GET
 */
router.get('/', projectController.getAll);

// Export router
module.exports = router;