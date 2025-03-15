const fs = require('node:fs')
//ls básico
fs.readdir('.', (err, files)=>{
    if(err){
        console.error('Error al leer el fichero:', err)
        return;
    }

    files.forEach(file =>{
        console.log(file)
    })
})