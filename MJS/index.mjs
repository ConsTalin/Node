//.js ---> Utiliza por defecto commonJS modules
//.mjs ---> Para ES modules
//.cjs ---> Fuerzas que utilice commonJS

import{sum, sub, mult} from './sum.mjs'
console.log(sum(1,2))
console.log(sub(2,3))
console.log(mult(2,2))