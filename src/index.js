const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path= require('path');
const app = express();
const port = 3000;

// http logger
app.use(morgan('combined'));
//Template engine
//bai template engine co mot bug o day, da sua
app.engine('hbs', handlebars.engine({
  //used to change .{duoi mo rong file .handlebars}
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})