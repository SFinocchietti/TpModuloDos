import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
import '../../style.css'
import { collection, getDocs } from "firebase/firestore"
import database from "../../config/firebase"
import Header from "../layout/Header"

const ProductList = () => {
    const [productos, setProductos] = useState<any[]>([])

    useEffect(() => {
        const fetchProductos = async () => {
            const productos_referencia = collection(database, "productos")
            const result = await getDocs(productos_referencia)
            console.log("viendo el result,", result)
            const productos_lista_formateada = result.docs.map(doc => ({
                idProducto: doc.id,
                ...doc.data()
            }))
            setProductos(productos_lista_formateada)
        }

        fetchProductos()
    }, [])

    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="product-list">
                {productos.map((producto) => (
                    <ProductCard
                        key={producto.idProducto}
                        idProducto={producto.idProducto}
                        title={producto.titulo}
                        precio_real={producto.precio_real}
                        precio_final={producto.precio_final}
                        descuento={producto.descuento}
                        imagen={producto.imagen}
                        descripcion={producto.descripcion}
                    />
                ))}
            </div>
        </>
    )
}

export default ProductList