const fs = require('node:fs/promises')

//Le dpodemos pasar el nombre del directorio que queremos listar
const folder = process.argv[2] ?? '.'


fs.readdir(folder) 
    .then(files =>{
     files.forEach(file => {
        const filePath = path.join(folder, file)
        
     })
    })

     .catch(err=> {
        if(err){
            console.error('Error al leer el directorio', err)
            return;
        }
     })
