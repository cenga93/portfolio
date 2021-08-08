const sendEmail = require("./mail/mail");
const projectController = require("./projects/index");
const testimonialController = require("./testimonials/index");
const socialLinksController = require("./socialLinks/index");

/**
 * @name home
 * @method GET
 */
module.exports.home = async (req, res) => {
    try {
        const projects = await projectController.getAll(req, res);
        const testimonials = await testimonialController.getAll(req, res);
        const socialLinks = await socialLinksController.getAll(req, res);

        res.status(200).render("partials/page/_index", {
            title: "Home page",
            footerType: "green",
            projects: projects ? projects : {},
            testimonials: testimonials ? testimonials : {},
            socialLinks: socialLinks ? socialLinks : []
        })
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};

/**
 * @name contact
 * @method GET
 */
module.exports.contact = async (req, res) => {
    try {
        res.status(200).render('partials/page/_contact', {
            title: "Contact page",
            footerType: "black",
            name: "Contact"
        });
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};

/**
 * @name sendMessage
 * @method POST
 */
module.exports.sendMessage = async (req, res) => {
    try {
        await sendEmail(req.body);
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};
