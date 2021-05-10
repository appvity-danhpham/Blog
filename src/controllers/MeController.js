const Favourite = require('../models/Favourite');
const { mutipleMongooseToOject, mongooseToOject } = require('../util/mongoose');

class MeController {

    // [GET] /me/stored/favourites
    storedFavourite(req, res, next) {
        Favourite.find({})
        .then(favourites => res.render('me/stored-favourites', {
            favourites: mutipleMongooseToOject(favourites)
        }))
        .catch(next);
    }
}

module.exports = new MeController;