const Project = require("../../models/projects");

/**
 * @name Project
 * @method GET
 */
module.exports = async (req, res) => {
    try {
        return await Project.find().exec();
    } catch ({message}) {
        res.status(500).json({message});
    }
};

