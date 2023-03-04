const express = require("express");
const app = express();
const routes = require('./routes/routes');
const sequelize = require("./database/database");


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// configurando body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rotas
app.use('/', routes);

app.get('/', function (req, res) {
  res.render('index');
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com o banco de dados');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados');
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados' + err);
  })

app.listen(5656, () => {
  console.log('Servidor rodando em http://localhost:5656');
});