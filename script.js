

function calcularSumaNotas(notas) {
    let suma = notas.reduce((a, b) => a + b, 0);
    return suma;
  }
  
  function calcularPromedioNotas(notas) {
    let suma = calcularSumaNotas(notas);
    let promedio = suma / notas.length;
    return promedio.toFixed(1);
  }
  
  let notasAlumno = [6, 8, 9, 2, 5, 10];
  
  let sumaNotas = calcularSumaNotas(notasAlumno);
  let promedioNotas = calcularPromedioNotas(notasAlumno);
  
  console.log("La suma de las notas es:", sumaNotas);
  console.log("El promedio de las notas es:", promedioNotas);

  document.getElementById("sumaNotas").textContent = "La suma de las notas es: " + sumaNotas;
document.getElementById("promedioNotas").textContent = "El promedio de las notas es: " + promedioNotas;