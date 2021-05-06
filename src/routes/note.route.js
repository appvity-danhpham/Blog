const express = require('express');
const router = express.Router();

const noteController = require('../app/controllers/NoteController');

router.use('/:slug', noteController.show);
router.use('/', noteController.index);

module.exports = router;
