const express = require('express');
const router = express.Router();

const favouriteController = require('../controllers/FavouriteController');

router.get('/:slug', favouriteController.show);
router.get('/', favouriteController.index);

module.exports = router;
