require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Genre, Videogame } = require('../db');


//get  http://localhost:3001/videogames

//consulta a la api https://api.rawg.io/api/games?key=5bdd7a2d70c0459ab0ec469d04dd3b21
//console.log(API_KEY);
router.get('/', async (req , res) => {
    try {
        const { name } = req.query;
        if (name) {
        const gamesAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
        .catch(err => undefined);
        if (!gamesAPI) {
            const gamesDB = Videogame.findOne({
                where: { name: name}
            });
            
            if (gamesDB) {
                return res.json(gamesDB);
            }
            else {
                return res.status(404).json({msg: 'no lo encontro en DB ni en API'})
            }
         }
           else {
            return res.json(gamesAPI)
         }
        }
        else {
        
            const gameDB = await Videogame.findAll({
                includes: {
                    model: Genre,
                    // attributes: ["name"],
                    // through: {
                    //     attributes: []
                    // }   
                }
            });

        const gameAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        const gamesAPItraidos = gameAPI.data.results;
        const allGames = gamesAPItraidos.concat(gameDB);
        return res.json(allGames);
        }
        
    }
    catch (err) {
//        throw new Error(err);
            res.status(400).send({err:err.message});
    }

})

module.exports = router;