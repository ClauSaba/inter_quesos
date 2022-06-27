const productos = [{
    codigo: 101,
    nombre: "mozzarella",
    precio: 1100,
    foto: "img/mozzarella.jpg",
    stock: 5,
    origen: "Italia",
    bandera: "img/banderaItalia.jpg"
},
{
    codigo: 102,
    nombre: "gorgonzola",
    precio: 1800,
    foto: "img/gorgonzola.jpg",
    stock: 5,
    origen: "Italia",
    bandera: "img/banderaItalia.jpg"
},
{
    codigo: 103,
    nombre: "grana padano",
    precio: 2700,
    foto: "img/granapadano.jpg",
    stock: 5,
    origen: "Italia",
    bandera: "img/banderaItalia.jpg"
},
{
    codigo: 104,
    nombre: "cacciocavallo",
    precio: 1600,
    foto: "img/cacciocavallo.jpg",
    stock: 5,
    origen: "Italia",
    bandera: "img/banderaItalia.jpg"
},
{
    codigo: 105,
    nombre: "morbier",
    precio: 1700,
    foto: "img/morbier.jpg",
    stock: 5,
    origen: "Francia",
    bandera: "img/banderaFrancia.jpg"
},
{
    codigo: 106,
    nombre: "brie",
    precio: 1600,
    foto: "img/brie.jpg",
    stock: 5,
    origen: "Francia",
    bandera: "img/banderaFrancia.jpg"
},
{
    codigo: 107,
    nombre: "camembert",
    precio: 2100,
    foto: "img/camembert.jpg",
    stock: 5,
    origen: "Francia",
    bandera: "img/banderaFrancia.jpg"
},
{
    codigo: 108,
    nombre: "roquefort",
    precio: 1900,
    foto: "img/roquefort.jpg",
    stock: 5,
    origen: "Francia",
    bandera: "img/banderaFrancia.jpg"
},
{
    codigo: 109,
    nombre: "gruyere",
    precio: 2300,
    foto: "img/gruyere.jpg",
    stock: 5,
    origen: "Suiza",
    bandera: "img/banderaSuiza.jpg"
},
{
    codigo: 110,
    nombre: "l`etivaz",
    precio: 1900,
    foto: "img/letivaz.jpg",
    stock: 5,
    origen: "Suiza",
    bandera: "img/banderaSuiza.jpg"
},
{
    codigo: 111,
    nombre: "emmenthal",
    precio: 1500,
    foto: "img/emmenthal.jpg",
    stock: 5,
    origen: "Suiza",
    bandera: "img/banderaSuiza.jpg"
},
{
    codigo: 112,
    nombre: "sbrinz",
    precio: 1300,
    foto: "img/sbrinz.jpg",
    stock: 5,
    origen: "Suiza",
    bandera: "img/banderaSuiza.jpg"
}
]

export const getData = new Promise((resolve, reject)=>{
    let condition = true;
    setTimeout(()=>{
        if (condition) {
            resolve(productos)
            }else{
            reject("Lo sentimos, ocurrió un problema, por favor intentar más tarde")
            }


    },2000)
}) 

