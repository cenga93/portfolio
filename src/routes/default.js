const express = require('express');
const router = express.Router();

// Import routes
const {contact, sendMessage, home} = require('../controllers/default');
const projectController = require("../controllers/projects");
const testimonialController = require("../controllers/testimonials");
const socialLinkController = require("../controllers/socialLinks");

/**
 * @name Project
 * @method GET
 */
router.get('/', home);

/**
 * @name contact
 * @method GET
 */
router.get('/contact', contact);

/**
 * @name sendMessage
 * @method POST
 */
router.post('/contact', sendMessage);

/**
 * @name Project
 * @method POST
 */
router.post('/', projectController.create);

/**
 * @method POST
 * @link /testimonials it's for now
 */
router.post('/testimonials', testimonialController.create);

/**
 * @method POST
 * @link /sociallink it's for now
 */
router.post('/sociallink', socialLinkController.create);

// Export router
module.exports = router;