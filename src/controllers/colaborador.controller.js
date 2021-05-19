const db = require("../config/database");

// ==> Método responsável por criar um novo 'colaborador':
exports.createColaborador = async (req, res) => {
  const { NOME, MATRICULA, EMAIL, DISCIPLINA, TURMA } = req.body;
  const { rows } = await db.query(
    "INSERT INTO colaborador (NOME, MATRICULA, EMAIL, DISCIPLINA, TURMA) VALUES ($1, $2, $3, $4, $5)",
    [NOME, MATRICULA, EMAIL, DISCIPLINA, TURMA]
  );
  res.status(201).send({
    message: "Colaborador adicionado com sucesso!",
    body: {
      product: { NOME, MATRICULA, EMAIL, DISCIPLINA, TURMA }
    },
  });
};