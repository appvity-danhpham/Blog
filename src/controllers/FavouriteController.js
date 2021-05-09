const Favourite = require('../models/Favourite');
const { mutipleMongooseToOject } = require('../util/mongoose');

class FavouriteController {

    // [GET] /favourite
    index(req, res, next) {
        Favourite.find({})
        .then(favourites => {
            res.render('favourite', { 
                favourites: mutipleMongooseToOject(favourites)
            })
        })
        .catch(next);
    }

    // [GET] /favourite/:slug
    show(req, res) {
        res.send('favourite detail');
    }
}

module.exports = new FavouriteController;