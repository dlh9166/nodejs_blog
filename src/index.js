const express = require('express');
const app = express();
const port = process.env.port || 3131;
const path = require('path');
const route = require('./routes/index');

//import db
const db = require('./config/db/index');

//connect to db
db.connect();

const morgan = require('morgan');
//logo, file tĩnh thi no se vao public/...
app.use(express.static(path.join(__dirname, 'public')));

//middleware, dang form html
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json()); //dang gui tu js

//handlebars
const handlebars = require('express-handlebars');
const { config } = require('process');
const { index } = require('./app/controllers/NewsController');

// import { engine } from 'express-handlebars';

//httplogger
// app.use(morgan('combined'))

//đường dẫn
// console.log('path::: ', path.join(__dirname, 'resource/views'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//khi chua phan nhanh
// app.get('/', (req, res) => {
//   res.render('home')
// })

// app.get('/news', (req, res) => {
//   console.log(req.query.q)
//   res.render('news')
// })

// app.use('/news', newsRouter)

// app.get('/search', (req, res) => {
//   res.render('search')
// })

// app.post('/search', (req, res) => {
//   console.log(req.body)
//   res.send('')
// })
