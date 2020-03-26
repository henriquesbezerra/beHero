const express = require('express');
const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');


routes.get('/', (request, response) =>{
    const params = request.params;
    const queries = request.query;
    const body = request.body;
    console.log(params, queries);
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Henrique Silva'
    });
});

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


routes.get('/profile', ProfileController.index);

module.exports = routes;
