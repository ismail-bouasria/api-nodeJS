'use strict'
const express =require('express')
const app = express()
const port = 3000

// Configuration de connexion à la base de donnée
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const bdd = {
    host: 'localhost',
    user:'root',
    password:'root',
    port: 8889,
    database : 'api-nodejs'
}
// Utilisation du middleware pour la connexion
 app.use(myconnection(mysql,bdd,'pool'));

// Configuration des routes de l'API
const usersRoute = require('./Router/Users');
const groupsRoute = require('./Router/Groups');

app.use('/users', usersRoute);
app.use('/groups', groupsRoute);

app.listen(port);
