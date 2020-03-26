const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());

// Antes de todas as requisições, converter json em objeto javascript
app.use(express.json());

app.use(routes);

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

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     * Query Builder -> knex.js
     */


app.listen(3333);
