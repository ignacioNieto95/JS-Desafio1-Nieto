let nombre = prompt("Ingrese el nombre de la materia: ");
let cantidadAlumnos = prompt("Ingrese la cantidad de alumnos del curso: ");
let sumaNotas = 0;

for(let i=0; i < cantidadAlumnos; i++){

    let nota = Number(prompt("Ingrese la nota del alumno n° " + (i+1) + " : "));
    sumaNotas += nota;

}

let promedioCurso = (sumaNotas / cantidadAlumnos);

if(promedioCurso > 6){
    console.log("La nota promedio de los alumnos del curso es superior a 6 y es de " + promedioCurso);
}
else{
    console.log("La nota promedio de los alumnos del curso es inferior a 6 y es de " + promedioCurso);
}
