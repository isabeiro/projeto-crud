const mongoose = require('mongoose')

//só qndo chamar essa função vai conectar e mostrar as mensagens
function connect() {

    /*mongoose.set('useNewUrlParser', true)
    mongoose.set('useUnifiedTopology', true)*/

    //conectar no mongoose, abre o compass(instalado normalmente na area de trabalho)
    mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    
    const db = mongoose.connection
    
    // assim q executar(c o mongoose) vai realizar essa tarefa
    db.once('open', () => {
        console.log('Conected to database')
    })
    
    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}
