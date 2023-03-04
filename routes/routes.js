const express = require("express");
const ProdutoController = require("../controllers/ProdutoController");
const Produto = require("../models/Produto");

const router = express.Router();

router.get('/produtos', ProdutoController.listarProdutos);
router.get('/produto/:id', ProdutoController.listarProduto);

router.get('/produtos/novo', (req, res) => {
  res.render('index')
});
router.post('/produto', ProdutoController.cadastrarProdutos);
router.post('/produto/update', ProdutoController.atualizarProduto);
router.post('/produto/delete', ProdutoController.deletarProduto);


router.get('/produto/:id/editar', (req, res) => {
  const id = req.params.id;

  Produto.findByPk(id).then((produto) => {
    res.render('editar', { produto: produto });
  })
});

module.exports = router;
