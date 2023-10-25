const Universe = require('./class/universe.class');
const express = require('express');
const mysql = require('mysql2');

const checktokenmw = require('./middleware/checkToken');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'api_b3_mds',
    password: 'fI0hd0O2/V1@tIQD',
    database: 'api_b3_mds'
});

const app = express();

app.use(express.json());

app.use(checktokenmw);

app.get("/universes", (req, res) => {
    let query = "SELECT * FROM universes";
    connection.query(query, (err, rows) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            let universes = [];
            for (let row of rows) {
                let universeTemp = Universe.fromMap(row);

                universes.push(universeTemp.toMap());
            }

            res.status(200).json(universes);
        }
    });
});

app.post("/universes", (req, res) => {
    let universe = Universe.fromMap(req.body);

    universe.generateDescription();

    let query = "INSERT INTO universes (name, description) VALUES (?, ?)";

    connection.query(query, [universe.name, universe.description], (err, result) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            universe.id = result.insertId;
            res.status(201).json(universe.toMap());
        }
    });
});


    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });