const Produto = require("../models/Produto");

class ProdutoController {
  async listarProdutos(req, res) {
    try {
      const produtos = await Produto.findAll();
      res.render('produtos', { produtos: produtos });
    } catch (error) {
      console.error(`Erro ao buscar produtos ${error}`);
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }

  async listarProduto(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      res.render('produto', { produto: produto });
    } catch (error) {
      console.error(`Erro ao buscar produto ${error}`);
      res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }

  async cadastrarProdutos(req, res) {
    try {
      const produtos = await Produto.create(req.body);
      res.redirect('/produtos')
    } catch (error) {
      console.error(`Erro ao cadastar produto ${error}`);
      res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
  }

  async atualizarProduto(req, res) {
    try {
      const { id, name, description, price } = req.body;
      const produtos = await Produto.update({
        name: name,
        description: description,
        price: price
      }, { where: { id: id} }).then(() => {
        res.redirect('/produtos')
      });
    } catch (error) {
      console.error(`Erro ao cadastar produto ${error}`);
      res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
  }




}

module.exports = new ProdutoController;