
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import ProductList from "./components/productos/productList"
import Login from './components/Login/Login'
import Detalle from "./components/Detalles/Detalle"
import Registro from "./components/Registro/Registro"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/productos" element={<ProductList />} />
        <Route path="/productos/:id" element={<Detalle />} />
        <Route path="*" element={<Navigate to="/productos" />} />
        <Route path="/login" element={<Login setLogueado={(valor: boolean) => console.log('Logueado:', valor)} />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  )
}

export default App
