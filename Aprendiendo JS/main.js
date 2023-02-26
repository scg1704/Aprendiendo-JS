/*Definir variables*/
var name = "Lionel Messi";
var height = 170;

/*Unir dos strings*/

var concatenacion = name + " " + height;

/*Mostrar variables*/
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>I'm the databox</h1>
    <h2>My name is: ${name}</h2>
    <h3>My height is: ${height} cm</h3>
`;

if(height >= 175){
    datos.innerHTML += '<h1>Eres una persona alta </h1>'
}
else{
    datos.innerHTML += '<h1>Eres una persona baja </h1>'
}

for(var i = 1985; i<=2023; i++){
    datos.innerHTML += "<h2>Estamos en el año: " +i;
}

/*Hacer funciones*/
function ShowMyName(name, height){
    var misDatos = `
    <h1>I'm the databox</h1>
    <h2>My name is: ${name}</h2>
    <h3>My height is: ${height} cm</h3>
`;
return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
datos.innerHTML = ShowMyName("El bicho SIUU", 185);
}

imprimir();

/*Arrays*/

var names = ['Osimhen','Kvaratshkelia','Lozano'];
alert(names[1]);

document.write('<h1>Names List</h1>')
for( i= 0; i<names.length; i++){
    document.write(names[i] + '<br/>');
}

/*Función para llamar una lista

names.forEach(function(name){
    document.write(name + '<br/>');
})
*/