class TransformadorTexto {
    constructor() {}


    static obtenerCantidadCaracteres(texto) {
        return texto.length;
    }

    static convertirAMayusculas(texto) {
        return texto.toUpperCase();
    }

    static convertirAMinusculas(texto) {
        return texto.toLowerCase();
    }

    
    static esPalindromo(palabra) {
        const palabraSinEspacios = palabra.replace(/\s/g, '').toLowerCase();
        return palabraSinEspacios === palabraSinEspacios.split('').reverse().join('');
    }
}

const texto = prompt("Introduce un texto:");
console.log("Cantidad de caracteres:", TransformadorTexto.obtenerCantidadCaracteres(texto));
console.log("Texto en mayúsculas:", TransformadorTexto.convertirAMayusculas(texto));
console.log("Texto en minúsculas:", TransformadorTexto.convertirAMinusculas(texto));

const palabra = prompt("Introduce una palabra para verificar si es palíndromo:");
console.log(`¿'${palabra}' es palíndromo?`, TransformadorTexto.esPalindromo(palabra));

