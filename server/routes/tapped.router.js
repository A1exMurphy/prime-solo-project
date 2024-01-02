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


module.exports = router;
