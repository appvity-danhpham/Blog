const favouriteRouter = require('./favourite.route');
const meRouter = require('./me.route');

function route(app) {
    app.use('/favourite', favouriteRouter);
    app.use('/me', meRouter);

    app.use('/', function (req, res) {
        res.render('home');
    });
}

module.exports = route;
