const SocialLink = require("../../models/socialLinks");
/**
 * @name SocialLink
 * @method GET
 */
module.exports = async (req, res) => {
    try {
        return await SocialLink.find().exec();
    } catch ({message}) {
        res.status(500).json({message});
    }
};