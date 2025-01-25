let numeroSecreto = 0;
let intentos = 0;
// esta es la forma para crear un Array, se debe crear con los []
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista para ello en JavaScript tiene el .includes 
        // el cual permite validar que todo el array un valor en especifico
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            // para que se repita el codigo el en retorno se activa nuevamente la funcion para crear un nuevo numero
            return generarNumeroSecreto();
        } else {
            // para almacenar un valor en un array se puede usar el .push el cual lo almacena en la ultima posicion.
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


/*----------------------------PRACTICA-------------------------------------------------
1. Crea una lista vacía llamada "listaGenerica".
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6. Crea una función que calcule el promedio de los elementos en una lista de números.
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8. Crea una función que devuelva la suma de todos los elementos en una lista.
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

let listaGenerica = [];

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguagesDeProgramacion.push("Java","Ruby","GoLang");

function mostrar(){
    console.log(lenguagesDeProgramacion);
    let i = 0;
    for( i;i<lenguagesDeProgramacion.length;i++){
        console.log(lenguagesDeProgramacion[i]);
    }
return;
}

function mostrarinverso(){
    let i = lenguagesDeProgramacion.length-1;
    for( i;i>=0;i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrar();
mostrarinverso();

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 30, 25, 5, 12];
  encontrarMayorMenor(numeros);