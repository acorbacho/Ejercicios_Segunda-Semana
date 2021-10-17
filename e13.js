/*Crea un programa que calcule el año de nacimiento introduciendo la edad
del usuario y lo muestre por pantalla.*/

var edad = prompt("Introduce tu edad")
var fecha = new Date();
var ano = fecha.getFullYear();
var anonacimiento1 = ano-edad
var anonacimiento2 = ano-edad-1

alert("Has nacido en: "+anonacimiento1+" o en "+anonacimiento2)