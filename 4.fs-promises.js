//Esto sólo en los módulos nativos
//que no tienen promesas nativas
//const {promisify} =require('node:util')
//const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')


fs.readFile('./archivo.txt', 'utf-8')
    
    .then(text=>{
    console.log('Primer texto', text)
})


console.log('Aqui estoy haciendo otras cosas') //Se ejecuta antes que el console.log(text)



fs.readFile('./archivo2.txt', 'utf-8')
.then (text=>{
    console.log('Este es el segundo texto', text)
})
