import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import database from "../../config/firebase"
import Especificaciones from "../Especificaciones/Especificaciones"

const Detalle = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [producto, setProducto] = useState<any>(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchProducto = async () => {
      if (!id) return
      const docRef = doc(database, "productos", id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProducto({ idProducto: docSnap.id, ...docSnap.data() })
      } else {
        setProducto(null)
      }
      setCargando(false)
    }
    fetchProducto()
  }, [id])

  if (cargando) return <p>Cargando...</p>
  if (!producto) return <p>Producto no encontrado</p>

  return (
    <Especificaciones
      descripcion={producto.descripcion}
      onVolver={() => navigate(-1)}
    />
  )
}

export default Detalle