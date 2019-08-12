const express = require('express');

const ctrl = require('./controllers/crudOpperations');

const cors = require('cors')

const app = express();
const swapiCtrl = require('./controllers/httpOperations')


app.use(express.json());
app.use(cors());


app.get('/users', ctrl.getUsers);

app.get('/user/:id', ctrl.getUserByParam)

app.get('/user',  ctrl.getUserByQuery)

app.post('/user', ctrl.createNewUser)

app.put('/users/:id', ctrl.updateUser)

app.delete('/users/:id', ctrl.deleteUser)

app.get('/swapi/users:page', swapiCtrl.getSwapiCharacters)

app.listen(8080, () => {
    console.log('server running yo!')
})