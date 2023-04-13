const express = require('express');
const router = express.Router();
const db = require('../database/db.js');

router.get('/', (req, res) => {
    try{
        res.json({ message: 'Hello World!' });
    }   
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

//retorna os usuarios
router.get('/users' , async (req, res) => {
    try {
        const rows = await new Promise((resolve, reject) => {
            db.all('SELECT * FROM users', (err, rows) => {  
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});


//cria um usuario
router.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await db.run(`INSERT INTO users (name, email) VALUES ("${name}", "${email}")`);
        const newUser = { id: result.lastID, name, email };
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

//delete um usuario
router.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await db.run(`DELETE FROM users WHERE id = ${id}`);
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

//edita um usuario
router.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    try {
        await db.run(`UPDATE users SET name = "${name}", email = "${email}" WHERE id = ${id}`);
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

//retorna um usuario
router.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const row = await new Promise((resolve, reject) => {
            db.get(`SELECT * FROM users WHERE id = ${id}`, (err, row) => {
                if (err) {
                    reject(err);
                }   
                resolve(row);
            });
        });
        res.json(row);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;