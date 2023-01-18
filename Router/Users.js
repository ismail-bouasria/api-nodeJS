const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    //Permet de recuperer l'infos de tout les users
    res.send('ok users')
    res.status(200);
})

router.post('/register', function (req,res,) {

})

router.post('/login', function (req,res) {
    //Permet de se connecter
})

router.get('/:id',function (req, res) {
    //Permet de recuperer l'info d'un user
})

router.get('/myId', function (req, res) {
    //Permet de recuperer mes infos persos
})

router.put('/myId', function (req, res) {
    //Permet de modifier mes infos persos
})

router.put('/:id', function (req, res) {
    //Permet de modifier mun utilisateur
})

router.delete('/:id', function (req, res) {
    //Permet de modifier mes infos persos
})

module.exports = router;

