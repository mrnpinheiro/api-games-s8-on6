const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');


router.get('/jogos', gameController.getGames);
router.get('/jogos/:id', gameController.returnGames);

module.exports = router;