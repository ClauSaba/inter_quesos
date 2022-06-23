import React from "react";
import "./ItemListContainer.css"


const Productos = [{
    codigo: 101,
    nombre: "mozzarella",
    precio: 1000,
    foto: "../../img/mozzarella.jpg"
},
{
    codigo: 102,
    nombre: "gorgonzola",
    precio: 2000,
    foto: "../../img/gorgonzola.jpg"
},
{
    codigo: 103,
    nombre: "grana padano",
    precio: 2000,
    foto: "../../img/granapadano.jpg"
},
{
    codigo: 104,
    nombre: "cacciocavallo",
    precio: 2000,
    foto: "../../img/cacciocavallo.jpg"
},
{
    codigo: 105,
    nombre: "morbier",
    precio: 2000,
    foto: "../../img/morbier.jpg"
},
{
    codigo: 106,
    nombre: "brie",
    precio: 2000,
    foto: "../../img/brie.jpg"
},
{
    codigo: 107,
    nombre: "camembert",
    precio: 2000,
    foto: "../../img/camembert.jpg"
},
{
    codigo: 108,
    nombre: "roquefort",
    precio: 2000,
    foto: "../../img/roquefort.jpg"
},
{
    codigo: 109,
    nombre: "gruyere",
    precio: 2000,
    foto: "../../img/gruyere.jpg"
},
{
    codigo: 110,
    nombre: "l´etivaz",
    precio: 2000,
    foto: "../../img/letivaz.jpg"
},
{
    codigo: 111,
    nombre: "emmenthal",
    precio: 2000,
    foto: "../../img/emmenthal.jpg"
},
{
    codigo: 112,
    nombre: "sbrinz",
    precio: 2000,
    foto: "../../img/sbrinz.jpg"
},



]

function ItemListContainer({greeting}){
    return(
        <div>
            <div className="greeting"><h1 >{greeting}</h1></div>
            {/* {Productos.map((item) => (
                <div className="Cartas" key={item.codigo}>
                <img className="FotoProducto" src={Productos.foto} alt={Productos.nombre} />    
                <p className="nombrePrecio" key={item.codigo}>{item.nombre} -  ${item.precio}</p>
                <button> agregar </button>
                </div>
                ))} */}
        </div>
        
    )}
    
export default ItemListContainer;

