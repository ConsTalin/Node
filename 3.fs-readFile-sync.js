const fs = require('node:fs')


console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
    console.log('Primer texto',text)



console.log('Aqui estoy haciendo otras cosas') //Se ejecuta antes que el console.log(text)


console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
    console.log('Segundo texto',text)



