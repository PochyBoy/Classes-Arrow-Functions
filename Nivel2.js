/** Ejercicio 1 **/

let nombre = (nombre) => {
    let objeto = {nombre: nombre}

    console.log(objeto)
}

nombre('Paul Vargas Portugal')

/** Ejercicio 2 **/

class Persona {
    constructor(nombre){
        this.nombre = nombre
        
    }
    get Nombre(){
        return this.muestraNombre()
    }
    
    muestraNombre(){
        return console.log(this.nombre)
    }

}

const Paul = new Persona ('Paul')

Paul.Nombre

