/*Crea un programa que recoja 3 datos del usuario y muestre si son el mismo
dato alguno de ellos.
Pista: (variable1 == variable2) o…*/

var dato1 = prompt("Introduce el primer dato")
var dato2 = prompt("Introduce el segundo dato")
var dato3 = prompt("Introduce el tercer dato")

/*dato1==dato2? alert("Hay datos iguales") : dato2==dato3? 
alert("Hay datos iguales") : dato1==dato3? 
alert("Hay datos iguales") : alert("Ningún dato es igual")*/

if (dato1==dato2)
    alert("El dato 1 es igual al dato 2")
if (dato2==dato3)
    alert("El dato 2 es igual al dato 3")
if (dato1==dato3)
    alert("El dato 1 es igual al dato 3")
if (dato1!==dato2 && dato2!==dato3 && dato1!==dato3)
    alert("Ningún dato es igual")