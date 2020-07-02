const opcs ={
    base:{
        demand:true,
        alias:'b'
      },
    limite:{
        alias: 'l',
        default: 10
      }

}
const argv = require('yargs')
    .command('listar','imprime en consola la tabla de multiplicar',opcs)
    .command('crear','crea un  archivo tabla de multiplicar',opcs)
  .help()
  .argv;


  module.exports={
      argv
  }