const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route to grab all beers in user's collection
router.get('/', (req, res) => {
    console.log('in GET query')

    const getCollection = 
    `
    SELECT * FROM "beers";
    `
  
    pool.query(getCollection)
    .then((result) => {
            // console.log(result.rows, "result.rows")
            res.send(result.rows)
        })
        .catch((err) => {
            console.log(err, "error in GET query")
            res.sendStatus(500)
        })
});

//POST route to add a new beer to user's collection
router.post('/', (req, res) => {
    console.log("in POST query")

  const insertNewBeer = 
    `
        INSERT INTO "beers" (
            "beer_name", "notes",  "image")
            VALUES ($1, $2, $3);
    `
    newBeerValues = [
        req.body.beer_name, 
        req.body.notes,
        req.body.image
    ]
    

    pool.query(insertNewBeer, newBeerValues)
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log(err, 'error in POST query')
            res.sendStatus(500)
        })
});


//DELETE route to remove a beer from beer collection
router.delete('/:id', (req, res) => {
    console.log("in DELETE query", req.body)

    const removeBeer = 
        `
        DElETE FROM "beers"
	        WHERE "id" = $1;
        `
        beerID = [req.params.id]


        pool.query(removeBeer, beerID)
            .then((result) => {
                res.sendStatus(200)
            })
            .catch((err) => {
                console.log(err, 'error in DELETE query')
                res.sendStatus(500)
            })
})


module.exports = router;
