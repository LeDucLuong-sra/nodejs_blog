const Book = require('../models/Book')
const {mutipleMongooseToObject} = require('../../util/mongoose')
class HomeController {
    loginTrue(req, res, next) {       
        Book.find({})
        .then(books => {
            
            res.render('home2',{  books: mutipleMongooseToObject(books)});
        })
        .catch(next);
        }
    // [Get => home]
    index(req, res, next) {       
    Book.find({})
    .then(books => {
        
        res.render('home',{  books: mutipleMongooseToObject(books)});
    })
    .catch(next);
    }
    
    
}
module.exports = new HomeController;