import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Colaborador from '../models/colaborador';

const models = [Colaborador];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
