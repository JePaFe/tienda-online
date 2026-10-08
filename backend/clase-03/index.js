// const productos = [
//   { id: 1, nombre: "Cuaderno", precio: 3500, stock: 10 },
//   { id: 2, nombre: "Lápices", precio: 1200, stock: 0 },
//   { id: 3, nombre: "Mochila", precio: 25000, stock: 4 },
//   { id: 4, nombre: "Cartuchera", precio: 8500, stock: 7 },
// ];

// Necesitamos buscar el producto con id 3.

// console.log(productos[2]);

// for (let i = 0; i < productos.length; i++) {
//   if (productos[i].id == 3) {
//     console.log(productos[i]);
//   }
// }

// for (const producto of productos) {
//   if (producto.id == 3) {
//     console.log(producto);
//   }
// }

// function buscarProductoPorId(productos, id) {
//   for (const producto of productos) {
//     if (producto.id == id) {
//       //   console.log(producto);
//       return producto;
//     }
//   }

//   return null;
// }

// const resultado = buscarProductoPorId(productos, 2);

// console.log(resultado);

const productos = [
  { id: 1, nombre: "Cuaderno", precio: 3500, stock: 10 },
  { id: 2, nombre: "Lápices", precio: 1200, stock: 0 },
  { id: 3, nombre: "Mochila", precio: 25000, stock: 4 },
  { id: 4, nombre: "Cartuchera", precio: 8500, stock: 7 },
];

// find

// producto con id == 3
function buscarProducto(producto) {
  if (producto.id == 3) {
    return true;
  }

  return false;
}

const resultado = productos.find(buscarProducto);

console.log(resultado);
