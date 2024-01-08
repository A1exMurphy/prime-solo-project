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
                res.send(result.rows)
            })
            .catch((err) => {
                console.log(err, 'error in GET query')
                res.sendStatus(500)
            })
})

module.exports = router;
