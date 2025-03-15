//process da información y control sobre el proceso de ejecución actual
//argumentos de entrada
console.log(ProcessingInstruction.argv)

//controlar el proceso y su salida
process.exit(1) //con 1 es que ha salido mal y queremos que salga
process.exit(0) //con 0 todo ha salido bien y sale. 

//controlar eventos del proceso
process.on('exit', ()=>{
    //y que cuando salga limpie los recursos
})

//current working directory
console.log(process.cwd()) //desde dónde estamos ejecutando el proceso

//variables de entorno
console.log(process.env.PEPITO) //Si yo le digo que pepito=hola y llamo al proceso, me va a devolver hola.

//Si se está ejecutando para entorno o desarrollo
console.log(process.env.NODE_ENV) 