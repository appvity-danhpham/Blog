const { Mongoose } = require('mongoose');
const Favourite = require('../models/Favourite');
const { mutipleMongooseToOject, mongooseToOject } = require('../util/mongoose');

class FavouriteController {

    // [GET] /favourite
    index(req, res, next) {
        Favourite.find({})
            .then(favourites => {
                res.render('favourite/favourite', { 
                    favourites: mutipleMongooseToOject(favourites)
                })
            })
            .catch(next);
    }

    // [GET] /favourite/:slug
    show(req, res, next) {
        Favourite.findOne({ slug: req.params.slug })
            .then(favourite => res.render('favourite/favourite-show', {
                favourite: mongooseToOject(favourite)
            }))
            .catch(next);
    }

    // [GET] /favourite/create
    create(req, res, next) {
        res.render('favourite/favourite-create')
    }

    // [GET] /favourite/:id/edit
    edit(req, res, next) {
        Favourite.findById(req.params.id)
            .then(favourite => res.render('favourite/favourite-edit', {
                favourite: mongooseToOject(favourite)
            }))
            .catch(next);
    }

    // [PATCH] /favourite/:id
    update(req, res, next) {
        Favourite.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/favourites'))
            .catch(next);
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