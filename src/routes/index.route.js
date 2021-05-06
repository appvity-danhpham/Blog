const noteRouter = require('./note.route');

function route(app) {
    app.use('/note', noteRouter);

    app.get('/', function (req, res) {
        res.render('home');
    });

    app.get('/search', function (req, res) {
        res.render('search');
    });

    app.post('/search', function (req, res) {
        console.log(req.body);
        res.render('search');
    });
}

module.exports = route;
