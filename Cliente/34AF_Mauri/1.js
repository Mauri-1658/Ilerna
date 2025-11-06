// Archivo JavaScript 1
const numbers = [4.7, 2.3, 9.8, 6.5];
const inputString = "JavaScript";

console.log("--- PARTE 1: Array de Números ---");

// a) Redondea todos los números hacia arriba (Math.ceil)
const roundedUp = numbers.map(num => Math.ceil(num));
console.log(`a) Redondeados hacia arriba (Math.ceil): ${roundedUp}`);
// Salida: [5, 3, 10, 7]

// b) Convierte todos los números a strings y muestra su longitud
const numberDetails = numbers.map(num => {
    const strValue = num.toString();
    return {
        value: num,
        stringValue: strValue,
        length: strValue.length
    };
});
console.log("b) Conversión a String y Longitud:");
numberDetails.forEach(item => {
    console.log(`   ${item.value} -> "${item.stringValue}" (Longitud: ${item.length})`);
});

// c) Calcula el mayor y el menor valor usando funciones Math (Math.max, Math.min)
const maxValue = Math.max(...numbers);
const minValue = Math.min(...numbers);
console.log(`c) Mayor valor (Math.max): ${maxValue}`); // Salida: 9.8
console.log(`c) Menor valor (Math.min): ${minValue}`); // Salida: 2.3

console.log("\n--- PARTE 2: String 'JavaScript' ---");

// a) Convierte todas las letras a mayúsculas (toUpperCase)
const upperCaseString = inputString.toUpperCase();
console.log(`a) A mayúsculas (toUpperCase): ${upperCaseString}`); // Salida: JAVASCRIPT

// b) Obtén los 4 primeros caracteres (substring)
const firstFourChars = inputString.substring(0, 4);
console.log(`b) Los 4 primeros caracteres (substring): ${firstFourChars}`); // Salida: Java

// c) Verifica si contiene la letra "S" (mayúscula) (includes)
const containsUpperS = inputString.includes("S");
console.log(`c) ¿Contiene la letra "S" (mayúscula)? (includes): ${containsUpperS}`); // Salida: false