var express = require('express');
var Banco = require('../bd');
var cors = require('cors');
var router = express.Router();

router.get('/alunos', cors(), (req, res) => {
    Banco.banco().query('SELECT nome_aluno FROM teste.aluno', function(err, result){
        if(err) console.error(err);
        else console.log(result.rows);
    });
    res.json("Eai");
})

module.exports = router;