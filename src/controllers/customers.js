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

async function listUsers(req, res) {
    const users = await CustomersModel.find()
    //.then() se não colocar await antes deve dizer oq precisa fazer depois dessa função

    res.render('listUsers', {
        title: 'Listagem de usuários',
        users, //vazio para receber os dados q vai puxar
    })
}

module.exports = {
    index,
    add,
    listUsers,
}