const Testimonial = require("../../models/testimonials");
const mongoose = require("mongoose");

/**
 * @name Testimonial
 * @method POST
 */
module.exports = (req, res) => {
    const {img, name, position, description, link} = req.body;

    const newTestimonial = new Testimonial({
        _id: new mongoose.Types.ObjectId(),
        img,
        name,
        position,
        description,
        link
    });

    newTestimonial.save()
        .then((result) => res.json(result))
        .catch(({message}) => res.status(500).json({message}));
};