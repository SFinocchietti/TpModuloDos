import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import ProductList from "./components/productos/productList"
import Login from "./components/Login/Login"
import Detalle from "./components/Detalles/Detalle"

function App() {
  const [logueado, setLogueado] = useState(false)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            logueado ? <Navigate to="/productos" /> : <Login setLogueado={setLogueado} />
          }
        />
        <Route
          path="/productos"
          element={logueado ? <ProductList /> : <Navigate to="/" />}
        />
         <Route path="/productos/:id" element={<Detalle />} />

      </Routes>
     
    </Router>
  )
}

export default App
