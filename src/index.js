/*const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path= require('path');
const app = express();
const port = 3000;

const routes= require('./routes');

app.use(express.static(path.join(__dirname,'public')));
// http logger
app.use(morgan('combined'));
//urlencoded + json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('hbs', handlebars.engine({
  //used to change .{duoi mo rong file .handlebars}
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));
//app.get('/', (req, res) => {
//  res.render('home');
//})
//app.get('/news', (req, res) => {
//  res.render('news');
//})
routes(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require("express-handlebars");
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');


const port = 3000;
const app = express();
const routes = require('./routes');
const db = require('./config/db')

//connect db
db.connect();


//cho phep xem file tinh, connect to css
app.use(express.static(path.join(__dirname,'public')));
//
app.use(express.json());
//http logger morgan 
app.use(morgan('combined'))
//cookie
app.use(cookieParser());
//urlencoded + json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride('_method'));
//template engine
app.engine(".hbs", engine(
  {
    extname: '.hbs',
  helpers: {
    sum: (a,b) => a+b
  }
}

));
app.set("view engine", ".hbs");
app.set('views', path.join(__dirname, '/resources/views'));

//Route init       
routes(app);       

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})