/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 */
import app from './src/app';

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
