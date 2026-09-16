function principal() {
  console.log("¡Hola, estudiantes!");
}

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

function multiplicarMultiplesNumeros(numeros) {
  let total = 1;
  for (let i = 0; i < numeros.length; i++) {
    total = total * numeros[i];
  }
  return total;
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  }
  return false;
}

function esEntero(numero) {
  if (numero === Math.round(numero)) {
    return true;
  }
  return false;
}

// Exportar funciones para pruebas (estilo Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    sumarMultiplesNumeros,
    multiplicarMultiplesNumeros,
    esPar,
    esEntero,
  };
}

// Ejecutar la función principal si este archivo se ejecuta directamente
if (require.main === module) {
  principal();
}
