const { Router } = require('express');
const router = Router();
const videogames = require('./genre');
const videogame = require('./videogame');
const genre = require('./videogames');

router.get('/genre', async (req, res) => {
    return res.send('hola soy genre');
 });

 router.get('/videogames', async (req, res) => {
    return res.send('hola soy videogames');
 });

router.get('/videogame/:idVideogame', async (req, res) => {
    return res.send('hola soy videogame');
 });





module.exports = router;
