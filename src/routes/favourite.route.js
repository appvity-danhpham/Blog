const express = require('express');
const router = express.Router();

const favouriteController = require('../controllers/FavouriteController');

router.post('/store', favouriteController.store);
router.get('/create', favouriteController.create);
router.get('/:id/edit', favouriteController.edit);
router.patch('/:id', favouriteController.update);
router.delete('/:id', favouriteController.delete);
router.get('/:slug', favouriteController.show);
router.get('/', favouriteController.index);

module.exports = router;
