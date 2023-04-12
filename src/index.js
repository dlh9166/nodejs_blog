
const express = require('express')
const app = express()
const port = 3131
const morgan = require('morgan')
const path = require('path')

//logo, file tĩnh thi no se vao public/...
app.use(express.static(path.join(__dirname, 'public')));


//handlebars
const handlebars = require('express-handlebars')
// import { engine } from 'express-handlebars';



//httplogger
app.use(morgan('combined'))
// console.log('path::: ', path.join(__dirname, 'resource/views'));

//template engine
app.engine('hbs', handlebars.engine(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

;


app.get('/', (req, res) => {
  res.render('home')
})



app.get('/news', (req, res) => {
  res.render('news')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})