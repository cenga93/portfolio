const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    icon: {
        type: String,
    }
});

// Create social link collection
const SocialLink = new mongoose.model('socialLinks', socialLinkSchema);

module.exports = SocialLink;