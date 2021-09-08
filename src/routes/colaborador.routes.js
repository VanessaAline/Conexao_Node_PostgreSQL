/**
 * Arquivo: src/routes/colaborador.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'colaborador'.
 */

// // ==> Definindo as rotas do CRUD - 'Colaborador':

import { Router } from 'express';
import ColaboradorController from '../controllers/colaborador.controller';

// import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', ColaboradorController.create);

export default router;
