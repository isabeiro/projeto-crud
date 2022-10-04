const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

//vai criar uma tabela com o noiem costumers com os dados acima, name, age, etc depois de ler o banco de dados
const Model = mongoose.model('customers', schema)

module.exports = Model