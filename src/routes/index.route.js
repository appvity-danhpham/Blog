const favouriteRouter = require('./favourite.route');

function route(app) {
    app.use('/favourite', favouriteRouter);

    app.use('/', function (req, res) {
        res.render('home');
    });
}

module.exports = route;
