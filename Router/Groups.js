const express = require('express');
const router = express.Router();

router.post('/register', function (req,res) {
    // Permet de créer un groupe
    res.status(201);
    res.send('ok groups')
})

router.get('/', function (req, res) {
    //Permet de recuperer les groupes de tout les users
    res.status(200);
})

router.get('/:id',function (req, res) {
    //Permet de recuperer le groupe d'un user
    res.status(200);
})

router.get('/myId', function (req, res) {
    //Permet de recuperer mon groupe persos
    res.status(200);
})

router.put('/myId', function (req, res) {
    //Permet de modifier mon groupe
    res.status(204);
})

router.put('/:id', function (req, res) {
    //Permet de modifier un groupe
    res.status(204);
})

router.delete('/:id', function (req, res) {
    //Permet de supprimer un groupe
    res.status(200);
})

module.exports = router;