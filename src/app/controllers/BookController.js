
const Book = require('../models/Book')
const {mongooseToObject} = require('../../util/mongoose')

class BookController {
  delete(req, res, next){
   Book.deleteOne({_id: req.params.id})
    .then(()=> res.redirect('/me/stored/books')) 
    .catch(next);
  }
  //[PUT] book/id
  update(req, res, next){
    Book.updateOne({_id: req.params.id}, req.body)
    .then(()=> res.redirect('/me/stored/books'))
    //.then(()=> res.json(req.body))
    .catch(next);
  }
    // [GET => edit book]
    edit(req, res, next) {  
      Book.findById(req.params.id)
      .then(books => res.render('Book_product/edit', {books: mongooseToObject(books)}))  
      .catch(next);
    }
   
//[GET]Create BOOK
    create(req, res, next) {    
      res.render('Book_product/create');
    }
//[POST] BOOK to DATBASE
    store(req, res, next) {    
      
          const book =new Book(req.body);
          book.save()
          .then(()=> res.redirect('/'))
          .catch(error=>{
      });
        
      
      
    }
//[GET]
   show(req, res, next) {    
      Book.findOne({slug: req.params.slug})
      .then(books => {   
         res.render('Book_product/book',{books: mongooseToObject(books)});
        //res.json(books);
      })
      .catch(next);
    }
//TRANG CHU book [GET]
    index(req, res, next) {         
      Book.find({})
        .then(books => {   
           res.json(books);
        })
        .catch(next);

}
}
module.exports = new BookController;