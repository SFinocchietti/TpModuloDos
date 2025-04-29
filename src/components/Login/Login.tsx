import { useState } from 'react';
import usuario from '../../../public/usurios.json'
import { useNavigate } from "react-router-dom"

interface LoginProps {
    setLogueado: (valor: boolean) => void;
}


const Login = ({ setLogueado }: LoginProps) => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate()


    const handleLogin = () => {
        if (nombreUsuario === usuario.usuario && contraseña === usuario.contraseña) {
            setLogueado(true);
            navigate("/productos");

        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };


    const handleVolver = () => {
        navigate("/productos")
    };



    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Ingresar</button>
            <br />
            <button className='btn-volver' onClick={handleVolver}>Volver</button>
        </div>
    );
};

export default Login;
