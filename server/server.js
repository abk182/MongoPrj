const express = require('express');
const app = express();
const path = require('path');
const database = require('./database');
const bodyparser = require('body-parser');

app.use('/', express.static(path.join(__dirname,('../public/'))));
app.get('/api/list', require('./routes/list.js'));

database.connect(()=>{
    app.listen(3000, console.log('STARTED ON 3000'));
});