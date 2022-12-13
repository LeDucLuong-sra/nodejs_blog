const Course = require('../models/Course')
class HomeController {
    // [Get => home]
   index(req, res, next) {       
        
        /* Course.find({}, function (err, courses) {
            //res.json({name: 'le phuong coi'})
            if(!err) res.json(courses);
            else{

                res.status(400).json({ error: 'ERROR!!' });
            }
            
          });*/
          
          Course.find({})
            .then(courses => {
                courses =courses.map(course => course.toObject())
                res.render('home',{  courses: courses});
            })
            .catch(next);
    //    res.render('home');
    }
    
}
module.exports = new HomeController;