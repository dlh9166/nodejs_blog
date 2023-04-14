const Course = require('../models/Course');

class SiteController {
    // [get] / home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home');
            })
            .catch(next);
    }

    // [get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
