class NewsController {
    // [Get => /news]
    index(req, res) {        
        res.render('news');
    }
    // [Get =>/news/:slug]
    show(req, res) {        
        res.send('Day la mot nhanh con trong news');
    }
}
module.exports = new NewsController;