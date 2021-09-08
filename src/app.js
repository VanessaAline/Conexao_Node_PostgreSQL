/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 */
// const express = require('express');
// const cors = require('cors');

// const app = express();

// // ==> Rotas da API:
// const index = require('./routes/index');
// const colaboradorRoute = require('./routes/colaborador.routes');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.json({ type: 'application/vnd.api+json' }));
// app.use(cors());
// app.use(index);
// app.use('/api/', colaboradorRoute);
// module.exports = app;

import dotenv from 'dotenv';

dotenv.config();

import './config/database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import colaboradorRoutes from './routes/colaborador.routes';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({
      extended: true,
    }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/colaboradores', colaboradorRoutes);
  }
}

export default new App().app;
