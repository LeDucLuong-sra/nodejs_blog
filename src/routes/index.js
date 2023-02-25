
const homeRouter = require('./home')
const bookRouter =require('./bookRoute')
const meRouter =require('./me')
const userRouter= require('./userRouter')
function routes(app){
    app.use('/book',bookRouter)
    app.use('/me',meRouter)
    app.use('/user',userRouter)
    app.use('/',homeRouter)

}

module.exports = routes