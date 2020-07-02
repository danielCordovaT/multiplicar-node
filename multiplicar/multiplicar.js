const fs = require('fs');
const colors = require('colors');
let dato = '';

let listarTabla = (base , limite = 10) =>{
    console.log(`-----------------------`.cyan)
    console.log(`----tabla de ${base}---`.red)
    console.log(`-----------------------`.cyan)
    for (let i=0;i<= limite;i++){
        console.log(`${base} * ${i} = ${base*i} \n`)
    }

   

}
let crearArchivo = (base,limite) =>{
    return new Promise((resolve,reject)=>{
        if (!Number(base)){
            reject(`el valor introducido ${base}  no es un numero`)
            return;
        }
        for(let i =1 ;i<=limite;i++){
            dato +=`${base}* ${i} = ${2*i} \n`;
        }
        
        const data = new Uint8Array(Buffer.from(dato));
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) reject (err);
          else
            resolve(` tabla-${base}.txt`)
         
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}