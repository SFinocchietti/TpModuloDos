import '../../style.css'


import { useNavigate } from 'react-router-dom'



const Header = () => {

    const navigate = useNavigate();

    const handlerInicioSecion = () => {
        navigate("/login");
    }

    const handlerRegistro = () => {
        navigate("/registro");
    }


    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">MercadoCompras</h1>
                <div className="header-buttons">
                    <button className="btn btn-login" onClick={handlerInicioSecion}>
                        Inicio de sesión
                    </button>
                    <button className="btn btn-register" onClick={handlerRegistro}>
                        Registrarse
                    </button>

                </div>
            </div>
        </header>

    )
}

export default Header
