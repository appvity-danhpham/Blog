const express = require('express');
const router = express.Router();

const favouriteController = require('../controllers/FavouriteController');

router.post('/store', favouriteController.store);
router.get('/create', favouriteController.create);
router.get('/:slug', favouriteController.show);
router.get('/', favouriteController.index);

module.exports = router;
