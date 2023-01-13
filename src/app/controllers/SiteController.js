const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class SiteController {

    // [GET] 
    index(req, res, next) {

        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err)
        //     }
        // });

        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject())
                res.render('home', { 
                    courses: multipleMongooseToObject(courses) 
                })
            })
            .catch(next)
        // res.render('home')
    }

    // [GET] search
    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController