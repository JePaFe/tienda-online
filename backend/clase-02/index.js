// const productos = ["manzana", "banana", "naranja"];

// // console.log(productos[1])

// for (let i = 0; i < productos.length; i++) {
//   console.log(productos[i]);
// }

// --- objetos

// const producto = {
//   nombre: "Cuaderno",
//   precio: 3500,
//   stock: 10,
// };

// console.log(producto.precio);

// --- arrays de objetos

const productos = [
  { id: 1, nombre: "Cuaderno", hojas: 100, precio: 3500, stock: 10 },
  { id: 2, nombre: "Cuaderno", hojas: 200, precio: 5500, stock: 10 },
  { id: 3, nombre: "Lápices", precio: 1200, stock: 0 },
  { id: 4, nombre: "Mochila", precio: 25000, stock: 4 },
];

// console.log(productos[1].nombre);

// const producto1 = productos[0];
// console.log(producto1.nombre);

// for (let i = 0; i < productos.length; i++) {
//   if (productos[i].id == 2) {
//     console.log(productos[i].nombre);
//   }
// }

// for (const [indice, producto] of productos.entries()) {
//   if (producto.id == 2) {
//     console.log(indice, producto.nombre, producto.precio);
//   }
// }

// for (const producto of productos) {
//   if (producto.id == 2) {
//     console.log(producto.nombre, producto.precio);
//   }
// }

// --- Funciones

// let a = 1
// let b = 3

// let suma = a + b;

// console.log(suma);

// function saludar(nombre) {
//     console.log("¡Hola, " + nombre + "!");
// }

// saludar("Juan");
// saludar("María");

function sumar(a, b) {
  let suma = a + b;
  //   console.log(suma);
  return suma;
}

let resultado = sumar(3, 4);
let resta = 10 - resultado;
console.log(resultado, resta);

resultado = sumar(5, 4);
console.log(resultado);
