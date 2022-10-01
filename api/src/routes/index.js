const { Router } = require('express');
const videogame = require('./videogame');
const router = Router();
// const videogames = require('./g');
// const videogame = require('./videogame');
const genre = require('./genre');

router.use('/genres', genre );
router.use('/videogames', videogame );





module.exports = router;
