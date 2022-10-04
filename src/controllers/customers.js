const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

function index(req, res) {
    res.render('register', {
        title: 'Cadastro de clientes'
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    //res.end() //para finalizar a conexão
    //para salvar o registro digitado
    //res.send('cadastro realizado!') carrega nova pagina com essa mensagem
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!'
    })
}

async function list(req, res) {
    const users = await CustomersModel.find()
    //.then() se não colocar await antes deve dizer oq precisa fazer depois dessa função

    res.render('list', {
        title: 'Listagem de usuários',
        users, //vazio para receber os dados q vai puxar
    })
}

async function formEdit(req, res) {
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user,
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message: 'Usuário alterado com sucesso!'
    })
}

async function remove(req, res) {
   const { id } = req.params

   const remove = await CustomersModel.deleteOne({_id: id })

   if (remove.deletedCount) {
    res.redirect('/list')
   }
}

module.exports = {
    index,
    add,
    list,
    formEdit,
    edit,
    remove,
}