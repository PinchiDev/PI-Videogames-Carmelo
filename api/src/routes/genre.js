require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Genre } = require('../db');

//consulta a la api https://api.rawg.io/api/games?key=5bdd7a2d70c0459ab0ec469d04dd3b21
//console.log(API_KEY);
router.get('/', async (req , res) => {
    try {
        const genresDB = await Genre.findAll();
//        console.log(genresDB);
        if (genresDB.lenght) {
            return res.json(genresDB);
        }
        else {
        const response = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const results = response.data.results;
        results.forEach(async el=>{
            await Genre.findOrCreate({
                where: {
                    name: el.name
                }
            })
        })
        const genreReady = results.map(el => {
            return {
                id: el.id,
                name: el.name
            }
//           console.log(genresDB);
        })
        res.json(genreReady);
//crear la primera inctacia
        
        }
        
    }
    catch (err) {
        console.log(err)
    }

})

module.exports = router;