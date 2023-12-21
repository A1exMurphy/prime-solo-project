const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body, "req.body")

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
    console.log(newBeerValues, 'beer to be added to database');

    pool.query(insertNewBeer, newBeerValues)
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log(err, 'error in POST query')
            res.sendStatus(500)
        })
});

module.exports = router;
