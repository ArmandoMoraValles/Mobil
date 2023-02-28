//Funciones declaradas
/* 
    Estas funciones siempre estaran disponibles en tiempo de ejecucion, permitiendo llamar a la funcion antes de su declaracion
    ya que al correr el programa, JS primeramente mueve estas declaraciones al inicio del programa 
*/
function suma(num1 = 1, num2 = 2){
    return num1 + num2 
}

function mult(num1 = 2, num2 = 4){
    return num1 * num2
}

//Funciones de expresion
/*
    Estas funciones no son declaradas hasta que son alcanzadas por el interprete por lo que su uso esta ligado a la pocision en la que
    son escritas, osea solo pueden ser usadas posteriormente a su declaracion
*/
const resta = function (num1 = 2, num2 = -2){
    return num1 - num2
}

const division = function(num1 = 10, num2 = 2){
    return num1/num2
}

//Funciones de flecha
/*
Estas funciones son las mas utilizadas en el desarrollo web por sus caracteristicas:
- Son mejor interpretadas por los navegadores
- Cuando son funciones muy cortas estas contienen un return implicito (lo que esta ligado al siguiente punto)
- Tiene una sintaxis mas limpia y compacta
- Cabe destacar que tambien son expresivas, solo estaran disponibles posteriormente a su declaracion
*/

const mayoresQue10 = (number) => number > 10 ? number : false

const findInArray = (array = [10,12,31,4,13,54,67,42,23,6,1]) => array.filter(mayoresQue10)

const main = () => {
    console.log(`Funciones declaradas: `)
    console.log(suma())
    console.log(mult())
    console.log(`Funciones expresivas: `)
    console.log(resta())
    console.log(division())
    console.log(`Funciones de flecha: `)
    console.log(findInArray());
}

main()