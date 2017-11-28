var personas = [
{
  "codigo" : "001",
  "nombre" : "Luis Lopez",
  "nota1" : 13,
  "nota2" : 11
}, {
  "codigo" : "002",
  "nombre" : "Carlos Galan",
  "nota1" : 10,
  "nota2" : 14
}, {
  "codigo" : "003",
  "nombre" : "Maria Perez",
  "nota1" : 17,
  "nota2" : 18
}, {
  "codigo" : "004",
  "nombre" : "Sonia Reverol",
  "nota1" : 19,
  "nota2" : 15
}, {
  "codigo" : "005",
  "nombre" : "Jose Guerrero",
  "nota1" : 18,
  "nota2" : 15
}, {
  "codigo" : "006",
  "nombre" : "Jesus Duque",
  "nota1" : 16,
  "nota2" : 18
}, {
  "codigo" : "007",
  "nombre" : "Iris troconiz",
  "nota1" : 15,
  "nota2" : 17
}, {
  "codigo" : "008",
  "nombre" : "Daniel Gonzalez",
  "nota1" : 11,
  "nota2" : 13
}, {
  "codigo" : "009",
  "nombre" : "Diego Parra",
  "nota1" : 14,
  "nota2" : 14
}, {
  "codigo" : "010",
  "nombre" : "Gustavo Sarda",
  "nota1" : 20,
  "nota2" : 20
}
];

//Elementos del JSON
 function leerJSON(json) {
  var out="----------Personas----------<br>";
  var i;
  for (i=0; i<json.length; i++) {
   out+="Codigo:" +json[i].codigo + " - " + "Nombre:" +json[i].nombre + " - " + "Nota1:" +json[i].nota1 + " - " + "Nota2:" +json[i].nota2 + "<br>";
}
   document.getElementById("estudiantes").innerHTML=out;
}

//Calculo de la nota mayor
  function calcularNotaMayor(json) {
    var out ="";
    var notaMayor = json[0].nota1;
    var pos = 0;
    var aux = "";
    for(i=0; i<json.length; i++) {
      if (json[i].nota1 >= 20) {
        notaMayor = json[i].nota1;
        pos=i;
        aux=aux+json[pos].nombre+ " = " + json[pos].nota1 + "<br>";
}
}
   document.getElementById("notaMayor").innerHTML="La persona con mayor nota es:" + aux + "<br>";
}

//Calculo de la nota menor
  function calcularNotaMenor(json) {
    var out ="";
    var notaMenor = json[0].nota1;
    var pos = 0;
    var aux = "";
    for(i=0; i<json.length; i++) {
      if (json[i].nota1 <= 10) {
       notaMenor = json[i].nota1;
       pos=i;
       aux=aux+json[pos].nombre+ " = " + json[pos].nota1 + "<br>";
}
}
    document.getElementById("notaMenor").innerHTML="La persona con menor nota es:" + aux + "<br>";
}

//Calculo de la nota promedio de un alumno
  function Alumno(codigo, nombre, nota1, nota2) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;

    this.promedio = function () {
    var promedio = (nota1 + nota2)/2;
      document.getElementById("notaPromedio").innerHTML="El promedio del estudiante "+this.nombre+" es: "+promedio;
};
}
  var alumno = new Alumno("005", "Jose Guerrero", 18, 15);

//Mostrar en navegador elementos del JSON.
function mostrarPersonas() {
  leerJSON(personas);
}

//Mostrar en el navegador el estudiante con la nota mayor.
function mostrarNotaMayor() {
  calcularNotaMayor(personas);
}

//Mostrar en pantalla del navegador el estudiante con la nota menor.
function mostrarNotaMenor() {
  calcularNotaMenor(personas);
}

//Mostrar en pantalla del navegador el promedio de notas de un alumno.
function mostrarNotaPromedio() {
  alumno.promedio();
}
