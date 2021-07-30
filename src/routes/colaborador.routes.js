/**
 * Arquivo: src/routes/colaborador.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'colaborador'.
 */
const router = require('express-promise-router')();
const colaboradorController = require('../controllers/colaborador.controller');

// ==> Definindo as rotas do CRUD - 'Colaborador':

// ==> Rota responsável por criar um novo 'Colaborador': (POST): localhost:3000/api/colaborador

router.post('/colaborador', colaboradorController.createColaborador);
module.exports = router;
