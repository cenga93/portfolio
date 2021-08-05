const Project = require("../../models/projects");
const mongoose = require("mongoose");

/**
 * @name Project
 * @method POST
 */
module.exports = (req, res) => {
    const {name, img, img_original, githubLink, externalLink, technologies} = req.body;
    const newProject = new Project({
        _id: new mongoose.Types.ObjectId(),
        name,
        img,
        img_original,
        githubLink,
        externalLink,
        technologies
    });

    newProject.save()
        .then((result) => {
            res.json(result);
        })
        .catch(({message}) => {
            res.status(500).json({message});
        });
};