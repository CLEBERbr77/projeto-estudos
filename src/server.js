const express = require('express');
const routes = require('./routes/app'); 
const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});