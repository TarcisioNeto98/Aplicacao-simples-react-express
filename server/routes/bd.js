var express = require('express');
var Banco = require('../bd');
var cors = require('cors');
var router = express.Router();

router.get('/alunos', (req, res) => {
    Banco.banco().query('SELECT nome_aluno FROM teste.aluno', function(err, result){
        if(err) console.error(err);
        else console.log(result.rows);
    });
    res.json("Eai");
});

router.post('/inserir/alunos', (req, res) => {
    valores = [req.body.id, req.body.nome, req.body.chave];
    
    console.log(valores);
    Banco.banco().query('INSERT INTO teste.aluno VALUES($1, $2, $3)', valores, (err, result) => {
        if(err) console.error(err);
    });
    Banco.banco().query('SELECT * FROM teste.aluno', (err, result) => {
        err ? console.error(err) : console.log(result.rows);
    });
});

module.exports = router;