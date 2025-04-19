// src/pages/DetalleProducto.tsx
import { useParams, useNavigate } from "react-router-dom"
import Especificaciones from "../Especificaciones/Especificaciones"
import productos from "../../../public/productos.json" 

const Detalle = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Buscar producto por ID (esto requiere que cada producto tenga un campo `id`)
  const producto = productos.find(p => p.idProducto === Number(id))

  if (!producto) return <p>Producto no encontrado</p>

  return (
    <Especificaciones
      descripcion={producto.descripcion}
      onVolver={() => navigate(-1)}
    />
  )
}

export default Detalle
