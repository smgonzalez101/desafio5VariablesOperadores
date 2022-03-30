/*2. Realizar operaciones con dos números.
Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números, calcular lo siguiente: Suma, Resta, División, Multiplicación Y Módulo*/

document.write(" ");
//ingreso  de 2 números diferentes entre ellos y mayores a cero.

alert("¡Realizando Operaciones: suma, resta, multiplicación, división y módulo!");
alert("Ingresa dos números diferentes entre sí y mayores a cero:");

//Ingreso el número 1 y de string lo trasformo a número
var num1 = parseInt(prompt("Ingresa el primer número mayor a 0:"));
//Ingreso el número 2  y de string lo trasformo a número
var num2 = parseInt(prompt("Ingresa el segundo número diferente al anterior y mayor a 0:"));
alert("Los resultados estarán disponibles al final del ejercicio.")
    //Muestra los resultados por pantalla y limpia la consola

document.write("Se muestran los resultados obtenidos:");
document.write("<br>")
document.write("<br>")
document.write("<hr>");
//mostrar números ingresados
document.write("Números ingresados: " + num1 + " y " + num2);
document.write("<br>")
document.write("<br>")
    //Mostrar la suma por consola.
document.write("La suma es:" + (num1 + num2));
document.write("<br>");
//Mostrar la resta
document.write("La resta es: " + (num1 - num2));
document.write("<br>");
//Mostrar la división
document.write("La división es: " + (num1 / num2));
document.write("<br>");
//Mostrar la multiplicación
document.write("La multiplicación es: " + (num1 * num2));
document.write("<br>");
//Mostrar el módulo
document.write("El módulo de los números  ingresados es " + (num1 % num2));
//Salto de linea
document.write("<br>");
document.write("<br>");
//Se imprime una linea
document.write("<hr>");

/*3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura:
0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K 
0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F*/

alert("Transformando la temperatura actual en grados Kelvin y Fahrenheit.");
//Ingreso y captura de temperatura, almacenado en la variable temperatura, transformando caracter a float
var temperatura = parseFloat(prompt("Ingresa la temperatura en grados Celcius:"))
alert("Los resultados estarán disponibles al final del ejercicio.")


//Muestra los resultados por pantalla y limpia la consola
document.write("<br>");
document.write("Termómetro:");
document.write("<br>");
document.write("<br>");
document.write("La temperatura ingresada es " + temperatura + " grados Celsius.");
document.write("<br>");
//Grados Kelvin
document.write("Los " + temperatura + " grados Celsius ingresados corresponden a " + (temperatura + 273.15) + " grados Kelvin.");
document.write("<br>");
//Grados Fahrenheit
document.write("Los " + temperatura + " grados Celsius ingresados corresponden a " + ((temperatura * 9 / 5) + 32) + " grados Fahrenheit.");
document.write("<br>");
document.write("<br>");
document.write("<hr>");

/*4. Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días.Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día. Se debe considerar lo siguiente:  - 1 año tiene 365 días  - 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.*/


//Para el calculo se crea la constante (no cambia de valor)año y semana
const anio = 365;
const semana = 7;

alert("Calculando el equivalente en Años de un número.");

//Solcitud ingreso para calcular el equivalente en Años de un número
var equivalencia = parseInt(prompt("Ingresa la cantidad de días a transformar en años:"));
alert("Los resultados estarán disponibles al final del ejercicio.")

//Mostrar los resultados.
document.write("<br>");
document.write("Equivalencia en años : ");
document.write("<br>");
document.write("<br>");
document.write("El número ingresado para obtener la equivalencia es: " + equivalencia);
document.write("<br>");
document.write(`Los ${equivalencia} días, equivalen a ${Math.floor(equivalencia/anio)} años, ${Math.floor((equivalencia%anio)/semana)} semanas, ${Math.floor(((equivalencia%anio)%semana)%semana)} días.`);
document.write("<br>");
document.write("<br>");
document.write("<hr>");

/*5. Crear un programa que solicite al usuario 5 números y realice los siguientes cálculos.
La suma de todos los números.
El promedio de los 5 números ingresados.*/


//Mostrar mensaje
alert("Ingresa 5 números para calcular la suma y el promedio:");
//Solicitar ingreso y capturar los 5 números correspondientes, trasformar de string a número
var numero1 = parseInt(prompt("Ingresa el primer número"));
var numero2 = parseInt(prompt("Ingresa el segundo número"));
var numero3 = parseInt(prompt("Ingresa el tercero número"));
var numero4 = parseInt(prompt("Ingresa el cuarto número"));
var numero5 = parseInt(prompt("Ingresa el quinto número"));
alert("Mostrando resultados de todas las operaciones.")

//Mostrando los resultados finales.
document.write("<br>");
document.write("Cálculo de la suma y el promedio");
document.write("<br>");
document.write("<br>");
document.write("Los números ingresados son: " + numero1 + ", " + numero2 + ", " + numero3 + ", " + numero4 + ", " + numero5);
document.write("<br>");
document.write("La suma es: " + (numero1 + numero2 + numero3 + numero4 + numero5));
document.write("<br>");
document.write("El promedio es: " + ((numero1 + numero2 + numero3 + numero4 + numero5) / 5));
document.write("<br>");
document.write("<br>");