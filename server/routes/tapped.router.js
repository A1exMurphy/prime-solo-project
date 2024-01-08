
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in GET tapped query')

    const getTapped = 
    `
    SELECT * FROM "beers"
        where "is_tapped" = true;
    `
  
    pool.query(getTapped)
    .then((result) => {
            console.log(result.rows, "result.rows")
            res.send(result.rows)
        })
        .catch((err) => {
            console.log(err, "error in GET tapped query")
            res.sendStatus(500)
        })
});


// PUT route to add/remove from tapped list
router.put('/:id', (req, res) => {
    console.log('in PUT tapped query')

    const changeTapped = 
    `
    UPDATE "beers"
        SET "is_tapped" = $1
        WHERE "id" = $2;

    `
    sqlValues = [req.body.tapped, req.params.id]

    pool.query(changeTapped, sqlValues)
    .then((result) => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err, "error in PUT tapped query")
        res.sendStatus(500)
    })
})


module.exports = router;
