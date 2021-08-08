const SocialLink = require("../../models/socialLinks");
const mongoose = require("mongoose");

/**
 * @name Project
 * @method POST
 */
module.exports = (req, res) => {
    const {name, link, icon} = req.body;
    const newSocialLink = new SocialLink({_id: new mongoose.Types.ObjectId(), name, link, icon});

    newSocialLink.save()
        .then((result) => {
            res.json(result);
        })
        .catch(({message}) => {
            res.status(500).json({message});
        });
};