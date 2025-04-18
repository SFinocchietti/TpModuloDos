// import { useEffect, useState } from "react"


// const Productos = () => {

//     const [productos, setProductos] = useState([])
//     const [cargando, setCargando] = useState(false)


//     const obtenerProductos = async () => {
//         setCargando(true)
//         const respuesta = await fetch('http://localhost:5173/productos.json')
//         respuesta.json()
//         const data = await respuesta.json()
//         console.log(data)
//         setProductos(data)
//     }

//     //con este useEffect nos aseguramos solo una vez la carga
//     useEffect(() => {
//         obtenerProductos()
//     }, [])

  

//     return (
//         <div>

//         </div>
//     )
// }

// export default Productos
