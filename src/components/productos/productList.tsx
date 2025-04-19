import ProductCard from "../productCard/ProductCard"
import productos from "../../../public/productos.json"
import '../../style.css'

const ProductList = () => {
    return (
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
    )
}

export default ProductList;
