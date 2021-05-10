const Favourite = require('../models/Favourite');
const { mutipleMongooseToOject, mongooseToOject } = require('../util/mongoose');

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
    show(req, res, next) {
        Favourite.findOne({ slug: req.params.slug })
        .then(favourite => res.render('favourite-show', {
            favourite: mongooseToOject(favourite)
        }))
        .catch(next);
    }

    // [GET] /favourite/create
    create(req, res, next) {
        res.render('favourite-create')
    }

    // [POST] /favourite/store
    store(req, res, next) {
        const formDate = new Favourite(req.body);
        formDate.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const favourite = new Favourite(formDate);
        favourite.save()
        .then(() => res.redirect(`/favourite/${favourite.slug}`))
        .catch(next);
    }
}

module.exports = new FavouriteController;