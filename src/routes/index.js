const newsRouter = require('./news')
const homeRouter = require('./home')
function routes(app){
    app.use('/news', newsRouter)
    app.use('/',homeRouter)
}

module.exports = routes