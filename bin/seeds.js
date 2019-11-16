const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
require('../config/db.config')

const celebrities = [
    {
        name: "Papo MC", 
        occupation: "Gordo Forro", 
        catchPhrase: "Dicen que Cacha..."
    },
    {
        name: "MKS", 
        occupation: "Mansilla Bro", 
        catchPhrase: "Tira la piedra y después esconde la mano... ya no estas tan solo te encontramos un hermano"
    },
    {
        name: "Dtoke", 
        occupation: "Lentejas MC", 
        catchPhrase: "... ¿Saben por qué me retiro del juego?, ¡Porque estos pelotudos me tienen los huevos llenos!"
    }
]

Celebrity.deleteMany({})
.then( () =>  console.log('Celebrities deleted') )
 .then( () => {
     return Celebrity.create(celebrities)
   .then((celebr) => console.info(`${celebr.length} new celebritie/s added to the database`))
 })
.catch( error => console.log(error))
.then(() => mongoose.connection.close());

