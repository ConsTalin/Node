const path = require('node:path')

//Barra separadora de carpetas según SO
console.log(path.sep)


//unir rutas con join path
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// conseguir nombre del fichero
const base = path.basename('/const/carpetainventada/texto.txt')
console.log(base)

//nombre del fichero sin la extensión

const filename =path.basename('/const/carpetainventada/text.txt', '.txt')
console.log(filename)


//que te de la extensión
const extension = path.extname('/const/carpetainventada/texto.txt')
console.log(extension)