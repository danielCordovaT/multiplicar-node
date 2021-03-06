const argv = require('./config/yargs').argv
const colors = require('colors/safe');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')


console.log(`limite :${argv.limite}`)

let comando = argv._[0]
switch(comando){
  case 'listar':
    listarTabla(argv.base,argv.limite)
    break
  case 'crear':
    crearArchivo(argv.base,argv.limite)
    .then( archivo => console.log(`Archivo creado :${colors.rainbow(archivo)}`) )
    .catch( e => console.log(e));
    break 


}