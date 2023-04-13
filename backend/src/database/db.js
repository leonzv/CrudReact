const sqlite3 = require('sqlite3').verbose();

// Abre conexão com o banco de dados
const db = new sqlite3.Database('./src/database/tstprac.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados.');
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
        });
    });
});

module.exports = db;





