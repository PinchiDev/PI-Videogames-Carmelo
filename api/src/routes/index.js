const { Router } = require('express');
const videogame = require('./videogame');
const router = Router();
// const videogames = require('./g');
const videogames = require('./videogames');
const genre = require('./genre');

router.use('/videogames', videogames );
router.use('/genres', genre );
router.use('/videogame', videogame );







module.exports = router;
