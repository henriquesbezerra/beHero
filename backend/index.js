const express = require('express');

const app = express();

// Antes de todas as requisições, converter json em objeto javascript
app.use(express.json());

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informção no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */


  /***
   * Tipos de parâmetros:
   * 
   * Query Params: Parametros nomeados enviados na rota após "?" (FIltros, páginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */



   /**
    * SQL: Mysql, SQlite, PostgressSQL, Oracle, Microsoft SQL Server 
    * NoSQL: MongoDB, CouchDB, etc.
    */

app.get('/:id', (request, response) =>{
    const params = request.params;
    const queries = request.query;
    const body = request.body;
    console.log(params, queries);
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Henrique Silva'
    });
});

app.post('/', (request, response) =>{   
    const body = request.body;
    console.log(body);
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Henrique Silva'
    });
});


app.listen(3333);
