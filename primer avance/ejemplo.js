//console.log("Hola mundo")

//let x = 89
//var y = 78

//console.log(x+y)

//y = "Foo Bar"

//console.log(y)

array = [2, "any type works", undefined, null, true, 2.51]
//console.log(array[0] * array[5])

//este tipo de dato es abstracto que es el JSON que en java se llaman objetos 
//para declarar un objeto es de esta forma:
// se puede usar los atributos que quieras
// los JSON son muy utiles ya que son muy flexibles 
obj = {
    name: "Foo",
    age: 23,
    city: "TJ"
}

//cuando se llama lo muestra como tal pero para traer los atributos es de la siguiente manera
/*console.log(obj["name"], obj["age"])

//otra forma de hacerlo es con los puntos
console.log(obj.name)

console.log(Object.values(obj))*/

//con i++ incrementa en uno en uno con i+=5 va de en 5 en 5
/*for(let i=0;i<100; i+=5){
    console.log(i)
}*/

//forma de recorrer un arreglo
/*for(let index = 0; index < array.length; index++){
    console.log(array[index])
}*/

//recorrer la estructura con esta forma
//for(let i of array){
  //  console.log(i)
//}
//con key te deja recorrer el objeto 
/*de esta forma se puede obtener el nombre de la clave con su valor 
esta sera la salida:
name: FOO
age : 23 

for(let key of Object.keys(obj)){
    console.log(key + ": " + obj[key])
}*/

/* con of no deberia ser usado para las key por eso es mejor usar in que te podra recorrer 
el objeto sin necesidad de usar Object.keys
for(let key in obj){
    console.log(key + ":" + obj[key])
}*/

/**
 * el while primero verifica si i cumple con la condicion e imprime el resultado de en 5 en 5
 
var i = 0
while(i < 1000){
    console.log(i)
    i+=5
}*/
/**
 * al contrario do-while no revisa hasta el final y si no lo cunple solo se imprime k no
 * se incrementa en 5 en 5.
 
var k = 1000
do{
    console.log(k)
    k += 5
}while(k<1000)*/

/**
 * operacines ternarias se usan para cortar la operacion de if/else

var gatito = "cute2"

if (gatito==='cute'){
    console.log("This Kitty is pretty cute")
}else{
    console.log("This is a Ordinary Kitty")
}

var ternary = (gatito==='cute') ? 'Kitty pretty cute' : 'kitty cute'
console.log(ternary)*/

/**
 * switch statement
 * es el switch como en java o en otros lenguajes.
 * se declara una variable y de eso se tiene una opciones case que ejecutaran diferentes mensajes u operaciones
 
var opc = 1

switch (opc){
    case 1:
        console.log("I am The case 1")
        break;
    case 2:
        console.log("I am case 2") 
        break;
    case 3:
        console.log("I am case 3")
        break;
    default:
        console.log("I am the default case")
        break;
}*/

/**
 * en las funciones se declaran las variables locales que si se intenta utilizar dara error 
 * porque no son globales.
 * en las funciones si la variable global se declara con el mismo nombre primero que encontrara
 * es la local luego la global por eso hay no hay que poner los mismos nombre.
 * una const no se puede cambiar de valor 
 
function foo( ){
    var a = 'hello';
    console.log(a);
}
console.log(a);*/

/*var fun = function base(b, h){
   return (b*h)/2
}
console.log(fun(12,5))*/

//esta forma no es recursiva solo es una forma de invocarla que es una variable que invoca el 
//metodo. pero si o invocas afuera del metodo te lo asignara como definido ya que el metodo no devuelve
//un valor

/*const foo = (function() {
    console.log("I am IIFE")
})();*/

//al invocarlo con parametros hay que poner los parametros para invocarlo
/*var msg = "Hello!"
const bar = (function(msg){
    console.log("Message: " + msg)
})(msg);*/

//con esta funcion retorna valores. La constante joe tiene la function anonima (que no tiene nombre)
//que retorna el mensaje "Hello World" que ahora se puede usar afuera de la function. 
/*const joe = (function() {
    return "Hello World!"
})();
console.log(joe)*/

/*const foo = function sum(x, y) {
    return x+y
}
console.log(foo(56, 34))*/
//console.log(sum(56,34))
//no se puede invocar directamente a la function sum porque ya esta almacenada en una const 

//en esta function se llama para imprimir 5 veces y sera mas rapido que el for.
/*var say = function (times) {
    if(times > 0){
        console.log("Hello ")
        say (times - 1)
    }
}
say(5)*/

//en esta forma say dara error porque no podra realizar la function ya que say esta asignado 
//como "Oops!"
/*var say = function (times) {
    if(times > 0){
        console.log("Hello ")
        say (times - 1)
    }
}
var saysay = say

say = "Oops!"
saysay(5)*/

//en esta forma como asignamos el nombre a la function ya funcionara al invocarlo ya que al invocarlo no se invoca el var
//si no la function 

/*var say = function say(times) {
    if(times > 0){
        console.log("Hello ")
        say (times - 1)
    }
}

var saysay = say
say = "Oops!"
saysay(5)*/

//para las arrays functions se utilizan para compactar normalmente no llevan nombre.
/**
 * la diferencia 
 */
var foo = function () {
    console.log("Hola mundo")
}

var bar = (msg) => { console.log("Hola Mundo" + msg) }

foo ()
bar("Hello")


/**
 * para las function pueden tener mas instrucciones. Pueden tener multiples parametros
 * el forEach indica que van a dar un recorrido y el comando 
 * con esta forma p, ...person estas indicando que es un arreglo, pero primero debe ser un parametro normal luego los arreglos.
 * no sale Hola porque se almacena en p y ese parametro no se esta usando se esta usando person solamente.
 */
function persons(p, ...person) {
    person.forEach(args =>{
        console.log("P -- " +args);
    });
}

persons("Hola", "Foo", "Bar", "Joe", "Doe")


/**
 * ahora con p la estamos usando ya que en el ejemplo anterior no lo usamos y en la terminal no salia 
 * asi que ahora se  obtiene y se usa Hola.
 
function persons(p, ...person) {
    person.forEach(args =>{
        console.log("P -- " +args + ":"+p);
    });
}

persons("Hola", "Foo", "Bar", "Joe", "Doe")
*/

function hello(HelloWorld, alma) {
    console.log("Hello")
}
hello("Ray", "Hello")

