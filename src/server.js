const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

//conexao com o banco de dados
db.connect()

//definindo uma schema, pode verificar em https://mongoosejs.com/docs/guide.html os tipos e documentação



// fez para testar se estava conectando e inserindo os dados direito
//const register = new Model({
//    name: 'Isabela',
//    age: 29,
//    email: 'isabela.ribeiro.16@hotmail.com',
//    password: '123456'
//})


//register.save()


//definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

// 404 error (not found)
app.use((req, res) => { // middleware
    res.send('Página não encontrada!')
})

// executando o servidos
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))