// index page
module.exports.index = async (req, res) => {
    try {
        res.status(200).render('partials/page/_index');
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};