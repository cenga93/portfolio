const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    img: {
        type: String,
        required: true,
    },
    img_original: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
    },
    externalLink: {
        type: String
    },
    technologies: [
        {
            name: String
        }
    ],
});

// Create projects collection
const Project = new mongoose.model('projects', projectSchema);

module.exports = Project;