const express = require('express');
const router = express.Router();

// config du token
const jwt = require('jsonwebtoken')
require('dotenv').config();

router.get('/all', function (req, res) {
    //Permet de recuperer l'infos de tout les users
    req.getConnection((erreur,connection)=>{
        if(erreur){
            console.log(erreur)
        }else{
            connection.query('SELECT * FROM `users` JOIN groupes WHERE users.id_groupe = groupes.id', [], (erreur, resultat)=>{
                if(erreur){
                    console.log(erreur)
                }else{
                    res.status(200).send(resultat)
                }
            })
        }
    })
})

router.post('/register', function (req,res,) {
// Enregistrer un users
   let email = 'testlinkapi@test.com'
    let password = 'testlinkapi'
    let firstName = 'testlinkapi'
    let lastName = 'testlinkapi'
    let idGroupe = 2
    req.getConnection((erreur,connection)=>{
        if(erreur){
            console.log(erreur)
        }else{
            let query = ' INSERT INTO `users`(`email`,`password`,`firstname`,`lastname`,`id_groupe`) VALUES (?, ?, ?, ?, ?)'
            connection.query(query, [email,password,firstName,lastName,idGroupe], (erreur, resultat)=>{
                if(erreur){
                    console.log(erreur)
                }else{
                    res.status(300).send(resultat)
                }
            })
        }
    })
})

router.post('/login', function (req,res) {
    //Permet de se connecter
    let emailInput = 'test1@test.com';
    let passwordInput = 'test'
    let login = 'SELECT * FROM `users` WHERE `email` = ? AND `password` = ?'
    req.getConnection((erreur,connection)=>{
        if(erreur){
            console.log(erreur)
        }else{
            connection.query(login, [emailInput,passwordInput], (erreur, user)=>{
                if(erreur){
                    console.log(erreur)
                }else{

                   //  Fetch le user depuis la db basé sur les données passées en paramètre
                    const idUser = user[0]
                    console.log(idUser)
                    if (!idUser) {
                        res.status(401).send('invalid credentials');
                        return ;
                    }

                    function generateAccessToken(user) {
                        return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: '1800s' });
                    }

                    const accessToken = generateAccessToken(idUser);

                    res.send({
                        accessToken,
                    });
                     console.log(accessToken)
                }
            })
        }
    })
})

router.get('/profil/:id',function (req, res) {
    //Permet de recuperer l'info d'un user
    const id = req.params.id;
    req.getConnection((erreur,connection)=>{
        if(erreur){
            console.log(erreur)
        }else{
            connection.query('SELECT * FROM `users` WHERE `id`= ?', [id], (erreur, resultat)=>{
                if(erreur){
                    console.log(erreur)
                }else{
                    res.status(200).send(resultat)
                }
            })
        }
    })


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

