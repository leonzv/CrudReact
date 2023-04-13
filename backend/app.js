const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../backend/src/database/db.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Put all API endpoints under '/api'
app.use('/api', require('../backend/src/routes/api.js'));

//passa o objeto db para todas as rotas
app.use((req, res, next) => {
    req.db = db;
    next();
});


app.listen(port, () => console.log(`Listening on port ${port}`));
