const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    console.log("in GET on beer with this  id query", req.params.id)

    const getBeer = 
        `
        SELECT * FROM "beers"
            WHERE "id" = $1;
        `
        beerID = [req.params.id]

        pool.query(getBeer, beerID)
            .then((result) => {
                res.send(result.rows[0])
            })
            .catch((err) => {
                console.log(err, 'error in GET query')
                res.sendStatus(500)
            })
})

//PUT route to update details of a beer existing in beer collection
router.put('/:id', (req, res) => {
    console.log("in PUT query")

    const updateBeer =
    `
    UPDATE "beers"
        SET "beer_name" = 'Legacy Pilsner',
            "notes" = 'a recreation of the Kewaunee brewing pils',
            "is_tapped" = 'true',
            "image" = 'something'

        WHERE "id" = 1;
    `

    pool.query(updateBeer)
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log(err, 'error in UPDATE query')
            res.sendStatus(500)
        })
})

module.exports = router;
