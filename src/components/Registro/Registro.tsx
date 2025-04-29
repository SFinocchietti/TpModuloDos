import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../../style.css'





const Registro = () => {

    const [nombreUsuario, setNombreUsuario] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()


    const handleLogin = () => {
        //setRegistrado(true);
        console.log("hice clic en registrarse")
    };


    const handleVolver = () => {
        navigate("/productos")
    };



    return (
        <div className="login-container">
            <h2>Registrarse</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button className='btn-registrarse' onClick={handleLogin}>Registrarse</button>
            <br />
            <button className='btn-volver' onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default Registro
