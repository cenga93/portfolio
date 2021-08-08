const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
    }
});

// Create projects collection
const Testimonial = new mongoose.model('testimonials', testimonialSchema);

module.exports = Testimonial;