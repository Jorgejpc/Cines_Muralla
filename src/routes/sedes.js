const express = require('express'); 
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('sedes/add');
});

router.post('/add', async (req, res) => {
    const { nombreFiscal, ubicacion, horario } = req.body;
    const newSede = {
        nombreFiscal,
        ubicacion,
        horario
    };
    await pool.query('INSERT INTO Sede SET ?', [newSede]);
    res.send('recibido');
});

module.exports = router;