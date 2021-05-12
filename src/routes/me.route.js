const express = require('express');
const router = express.Router();

const meController = require('../controllers/MeController');

router.get('/stored/favourites', meController.storedFavourite);
router.get('/trash/favourites', meController.trashFavourite);

module.exports = router;
