import ProductList from "./components/productos/productList"
import { useState } from "react"
import Login from './components/Login/Login'



function App() {

  const [logueado, setLogueado] = useState(false);


  return (

    <div>
     {logueado ? (
        <ProductList />
      ) : (
        <Login setLogueado={setLogueado} />
      )}

    </div>

  )
}

export default App
