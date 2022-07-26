import { createContext, useState, useEffect }  from 'react'


export const CartContext = createContext();
const {Provider} = CartContext;

const CustomProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  let [cantidad, setCantidad] = useState(0)

  const getQtyProducts = () => {
    let cantidad = 0
    products.forEach(product => cantidad += product.cantidad)
    setCantidad(cantidad)
  }

  useEffect(() => {
    getQtyProducts()
  }, [products])

  const clear = () => {
    setProducts([]);
  }  

  const isInCart = (codigo) =>{
    return products.some(products =>products.codigo === codigo)
  }

  const deleteProduct = (codigo) =>{
    const found = products.find(p => p.codigo === codigo)
    const index = products.indexOf(found)
    console.log(index);
    const aux = [...products]
    aux.splice(index, 1)
    setProducts(aux)
    console.log(aux);
  }

  const addProduct = (product) =>{
    if (isInCart(product.codigo)){
      const found = products.find(p => p.codigo === product.codigo)
      const index = products.indexOf(found)
      const aux = [...products]
      aux[index].cantidad += product.cantidad
      setProducts(aux)
    }else{
      setProducts([...products, product])
    }
    getQtyProducts()
  } 

  return (
    <Provider value={{ products, clear, isInCart, deleteProduct, getQtyProducts, cantidad, addProduct }}>
      {children}
    </Provider>
  )
}

export default CustomProvider