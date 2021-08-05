const sendEmail = require("./mail/mail");

/**
 * @name Home
 * @method GET
 */
// module.exports.index = async (req, res) => {
//     try {
//         res.status(200).render('partials/page/_index', {
//
//         });
//     } catch (err) {
//         res.status(500).json({
//             error: err,
//         });
//     }
// };

/**
 * @name Contact
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
 * @name Contact
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
