const Project = require("../../models/projects");

/**
 * @name Project
 * @method GET
 */
module.exports = async (req, res) => {
    try {
        const projects = await Project.find().exec();
        if (projects.length) {
            res.status(200).render("partials/page/_index", {
                title: "Home page",
                footerType: "green",
                projects
            })
        } else {
            res.status(404).json({message: 'Not found records'})
        }

    } catch ({message}) {
        res.status(500).json({message});
    }
};