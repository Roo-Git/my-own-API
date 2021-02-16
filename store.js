/*
Se requiere escribir una clase que gestione el estado de modo que emule 
el comportamiento de una base de datos, esta clase tendra un constructor 
que emite un console log indicando que se ha creado un nuevo estado.

requisitos
Esta clase estara en el directorio raiz
La clase tendra una propiedad llamada state que es un array de objetos.
La clase tendra un metodo set que reciba por parametro un objeto y tras agregar el objeto al array state devuelve una promesa con el numero total de elementos que hay ahora en el array
La clase tendra un metodo get que devuelve una promesa de los ultimos 10 datos guardados en el estado.
testearemos el funcionamiento de la clase antes de hacer el commit con la feature.
*/

const { builtinModules } = require("module");

class Store {

    state = [];

    constructor(){
        console.log("Se ha creado una instancia de Store")
    };
    
    async set(object) {
        this.state.push(object)
        return this.state.length;
    }

    async get() {
        return this.state.slice(-10); 
    }
};

module.exports = Store;

