const express =require('express')
const app = express()
const port = 3000

const usersRoute = require('./Router/Users');
const groupsRoute = require('./Router/Groups');

app.use('/users', usersRoute);
app.use('/groups', groupsRoute);

app.listen(port);
