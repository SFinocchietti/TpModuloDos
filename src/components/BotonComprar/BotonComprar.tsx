import { useState } from "react"


const estadosDisponibles = {
    no_comprado: "no_comprado",
    comprado: "comprado",
    cargando: "cargando",
}


const BotonComprar = () => {

    const [estadoBoton, setEstadoBoton] = useState(estadosDisponibles.no_comprado)


    const reset = () => {
        setEstadoBoton(estadosDisponibles.no_comprado)
    }

    const comprar = () => {
        setEstadoBoton(estadosDisponibles.cargando)
        setTimeout(() => {
            setEstadoBoton(estadosDisponibles.comprado)
        }, 2000);
    }

    let content
    if (estadoBoton === estadosDisponibles.comprado) {
        content = <button>Comprado</button>
    } else if (estadoBoton === estadosDisponibles.cargando) {
        content = <button >Cargando...</button>
    }
    else {
        content = <button onClick={comprar}>Comprar</button>
    }


    return (
        <div>
            {content}
            <button 
            className="reset"
            onClick={reset}
                disabled={estadoBoton === estadosDisponibles.cargando || estadoBoton === estadosDisponibles.no_comprado}
            >Reset</button>
        </div>
    )
}

export default BotonComprar
