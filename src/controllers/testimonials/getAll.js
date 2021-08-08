const Testimonial = require("../../models/testimonials");

/**
 * @name Testimonial
 * @method GET
 */
module.exports = async (req, res) => {
    try {
        return await Testimonial.find().exec()
    } catch ({message}) {
        res.status(500).json({message});
    }
};

