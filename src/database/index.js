const mongoose = require('mongoose')


function connect() {
    //mongoose.set('useNewUrlParser', true)
    //mongoose.set('useUnifiedTopology', true)
    
    mongoose.connect('mongodb://localhost:27017/projeto-crud')
    //após a barra add o nome da pasta do banco de dados criado
    
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('Conected to database!')
    })
    
    db.on('error', console.error.bind(console, 'connection error:'))
}

module.exports =  {
    connect
}