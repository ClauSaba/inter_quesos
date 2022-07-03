const productos = [{
    codigo: 101,
    nombre: "mozzarella",
    precio: 1100,
    foto: "img/mozzarella.jpg",
    stock: 5,
    origen: "Italia",
    bandera: "img/banderaItalia.jpg",
    descripcion: "La mozzarella de búfala es uno de los quesos más tradicionales de la gastronomía italiana, del italiano mozzare ‘cortar’ o de su variante regional muzzare, se elabora con leche de búfala y es un queso más nutritivo que el elaborado con leche de vaca, ya que concentra más proteínas, grasas y lactosa.",
    tipo:"fresco"
},
{
    codigo: 102,
    nombre: "gorgonzola",
    precio: 1800,
    foto: "img/gorgonzola.jpg",
    stock: 5,
    origen: "Italia",
    bandera: "img/banderaItalia.jpg",
    descripcion: "El gorgonzola es un queso italiano de mesa, de pasta cremosa y untuosa, hecho con leche entera pasteurizada de vaca que se presenta en dos variedades: dulce y picante. Añejamiento: 3-4 meses ",
    tipo:"azul"
},
{
    codigo: 103,
    nombre: "grana padano",
    precio: 2700,
    foto: "img/granapadano.jpg",
    stock: 5,
    origen: "Italia",
    bandera: "img/banderaItalia.jpg",
    descripcion: "El Grana Padano es un queso italiano con denominación de origen protegida a nivel europeo y Denominazione di Origine Controllata de Italia. El nombre proviene del término grana, que se refiere a su distintiva textura granulosa y el adjetivo Padano, que se refiere a la llanura padana, es decir del valle del río Po. ",
    tipo:"duro"
},    
{
    codigo: 104,
    nombre: "cacciocavallo",
    precio: 1600,
    foto: "img/cacciocavallo.jpg",
    stock: 5,
    origen: "Italia",
    bandera: "img/banderaItalia.jpg",
    descripcion: "Queso de pasta hilada de color amarillo con una sutil corteza de forma irregular y un perfume láctico de mantequilla y notas florales y vegetales bastante pronunciadas. La textura es compacta, elástica al tacto.",
    tipo:"semiduro"
},
{
    codigo: 105,
    nombre: "morbier",
    precio: 1700,
    foto: "img/morbier.jpg",
    stock: 5,
    origen: "Francia",
    bandera: "img/banderaFrancia.jpg",
    descripcion: " Morbier es un queso francés con AOC, proveniente del Franco-Condado. Se reconoce fácilmente por la capa negra de cenizas que separan la pasta horizontalmente en el medio. Obtuvo su reconocimiento como DOP ",
    tipo:"fresco"
},
{
    codigo: 106,
    nombre: "brie",
    precio: 1600,
    foto: "img/brie.jpg",
    stock: 5,
    origen: "Francia",
    bandera: "img/banderaFrancia.jpg",
    descripcion: "El brie es un queso de pasta blanda elaborado con leche cruda de vaca. Se denomina así por la región geográfica francesa de la cual procede, la Brie.",
    tipo:"fresco"
},
{
    codigo: 107,
    nombre: "camembert",
    precio: 2100,
    foto: "img/camembert.jpg",
    stock: 5,
    origen: "Francia",
    bandera: "img/banderaFrancia.jpg",
    descripcion: "El Camembert de Normandie es un queso de leche de vaca producido en la región francesa de Normandía. Dentro de su país, está protegido por una denominación de origen controlada desde 1983 y es una DOP por el reglamento de la Comisión Europea",
    tipo:"fresco"
},
{
    codigo: 108,
    nombre: "roquefort",
    precio: 1900,
    foto: "img/roquefort.jpg",
    stock: 5,
    origen: "Francia",
    bandera: "img/banderaFrancia.jpg",
    descripcion: "Es el más antiguo de los quesos franceses y uno de los más caros del mundo. Es un queso de leche de oveja coagulada que se elabora en los alrededores de la pequeña localidad de Roquefort-sur-Soulzon, en la región de Aveyron, y que cuenta que el reconocimiento de denominación de origen protegida.",
    tipo:"azul"
},
{
    codigo: 109,
    nombre: "gruyere",
    precio: 2300,
    foto: "img/gruyere.jpg",
    stock: 5,
    origen: "Suiza",
    bandera: "img/banderaSuiza.jpg",
    descripcion: "a base de leche de vaca entera, de pasta prensada y cocida. Se caracteriza por una corteza granulada y dura, aunque su pasta es blanda y se puede cortar con facilidad. Tiene un aspecto algo graso y un color amarillo de marfil a dorado. Su aroma es suave, algo dulce parecido a la nuez, y su sabor consigue tener toques ligeramente picantes dependiendo del grado de maduración.",
    tipo:"semiduro"
},
{
    codigo: 110,
    nombre: "l`etivaz",
    precio: 1900,
    foto: "img/letivaz.jpg",
    stock: 5,
    origen: "Suiza",
    bandera: "img/banderaSuiza.jpg",
    descripcion: " sabor pronunciado, picante y afrutado con una nota ligeramente a nueces que varía ligeramente de montaña a montaña dependiendo del alimento de las vacas. Su masa es de color marfil a amarillo claro y las hogazas pesan entre 15 y 35 kilogramos. El Etivaz AP se madura en 5-13 meses ",
    tipo:"semiduro"
},
{
    codigo: 111,
    nombre: "emmenthal",
    precio: 1500,
    foto: "img/emmenthal.jpg",
    stock: 5,
    origen: "Suiza",
    bandera: "img/banderaSuiza.jpg",
    descripcion: "El emmental es un queso suizo hecho de leche de vaca y con agujeros característicos. Se trata de un queso alpino proveniente del valle del río Emme",
    tipo:"semiduro"
},
{
    codigo: 112,
    nombre: "sbrinz",
    precio: 1300,
    foto: "img/sbrinz.jpg",
    stock: 5,
    origen: "Suiza",
    bandera: "img/banderaSuiza.jpg",
    descripcion: "El Sbrinz es un queso muy duro producido en el centro de Suiza. Se emplea a menudo en lugar del parmesano en la cocina suiza. Se elabora solo en 42 queserías del centro del país, que emplean para ello exclusivamente leche de vaca",
    tipo:"duro"
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
