const router = require('express').Router()

//Controller e Model sempre com maiuscula e seguido de controller
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// rotas
router.get('/', IndexController.index)
//rotas cuidando do endpoint - intermediam a informação e manda pro controller - sempre com primeira letra maiuscula

//registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//rota para listar usuários
router.get('/list', CustomersController.list)

//editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

    
// CONTROLLER - QM VAI RECEBER OS DADOS, SALVAR NO BANCO DE DADOS E DAR UMA RESPOSTA - IDEAL FICAR SEPARADO DAS ROTAS

module.exports = router