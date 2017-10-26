const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/api/list', (req,res)=>{
    db.get().collection('items').find().toArray((err, items) => {
        if (err) {
            res.send({'error':'An error has occurred','type':err});
        } else {
            res.send(items);
        }
    });

});

module.exports = router;