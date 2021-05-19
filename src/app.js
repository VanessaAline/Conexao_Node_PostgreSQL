/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 */
 const express = require('express');
 const cors = require('cors');
 const app = express();

 // ==> Rotas da API:
 const index = require('./routes/index');
 const colaboradorRoute = require('./routes/colaborador.routes');

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.json({ type: 'application/vnd.api+json' }));
 app.use(cors());
 app.use(index);
 app.use('/api/', colaboradorRoute);
 module.exports = app;