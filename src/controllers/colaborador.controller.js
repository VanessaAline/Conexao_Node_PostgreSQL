// const db = require('../config/database');
import Colaborador from '../models/colaborador';

// ==> Método responsável por criar um novo 'colaborador':
class ColaboradorController {
  async create(req, res) {
    try {
      const newColaborabor = await Colaborador.create(req.body);
      const {
        id, matricula, nome, cpf, email, telefone, password,
      } = newColaborabor;
      return res.json({
        id, matricula, nome, cpf, email, telefone, password,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: ['Erro ao enviar os dados'],
      });
    }
  }
}

export default new ColaboradorController();
