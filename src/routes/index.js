const express = require('express');
const router = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores');

router.get('/', async (req, res) => {
    const IOT_Proyecto = await Valor.find();
    console.log(IOT_Proyecto);
    res.render('index.ejs',{
        IOT_Proyecto
    });
});

router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
});

module.exports = router;