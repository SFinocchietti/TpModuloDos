import { useState } from 'react';
import usuario from '../../../public/usurios.json'

interface LoginProps {
    setLogueado: (valor: boolean) => void;
}


const Login = ({ setLogueado }: LoginProps) => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const manejarClick = () => {
        if (nombreUsuario === usuario.usuario && contraseña === usuario.contraseña) {
            setLogueado(true);
        } else {
            alert('Usuario o contraseña incorrectos');
        }
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
            <button onClick={manejarClick}>Ingresar</button>
        </div>
    );
};

export default Login;
