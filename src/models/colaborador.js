import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Colaborador extends Model {
  static init(sequelize) {
    super.init({
      matricula: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 8],
            msg: 'O campo matricula deve ter entre 6 e 8 caracteres',
          },
        },
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter no minimo 3 caracteres',
          },
        },
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [11],
            msg: 'O campo cpf deve ter 11 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe na base de dados',
        },
        validate: {
          isEmail: {
            msg: 'E-mail é inválido',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [11],
            msg: 'O campo telefone deve ter 11 caracteres',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 10],
            msg: 'A senha precisa ter entre 6 e 10 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (colaborador) => {
      if (colaborador.password) {
        colaborador.password_hash = await bcryptjs.hash(colaborador.password, 8);
      }
    });

    return this;
  }

  passwordIsValidate(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
