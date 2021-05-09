const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
const db = require('./config/db/connect');

db.connect();

const route = require('./routes/index.route');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

route(app);
 
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});