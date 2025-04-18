import { useState } from "react";
import BotonComprar from "../BotonComprar/BotonComprar";
import Especificaciones from "../Especificaciones/Especificaciones";
interface ProductCardProps {
    title: string;
    precio_real: number;
    precio_final: number;
    descuento: number;
    imagen: string;
    descripcion: string;

}

const ProductCard = ({ title, precio_real, precio_final, descuento, imagen, descripcion }: ProductCardProps) => {
    const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

    const verDetalle = () => {
        setMostrarDescripcion(true);
    };

    const volver = () => {
        setMostrarDescripcion(false);
    };
    return (
        <div className="product-card">
            <img src={imagen} alt={title} />
            <h2>{title}</h2>
            <div className="precio-real">Precio real: ${precio_real.toLocaleString()}</div>
            <div className="descuento">-{descuento}%</div>
            <div className="precio-final">${precio_final.toLocaleString()}</div>
            <div style={{ marginTop: "1rem" }}>
                <BotonComprar />
            </div>

            <div style={{ marginTop: "1rem" }}>
                {!mostrarDescripcion ? (
                    <button
                    className="detalle" 
                    onClick={verDetalle}>Ver Detalle</button>
                ) : (
                    <Especificaciones descripcion={descripcion} onVolver={volver} />
                )}
            </div>
        </div>

    );
};

export default ProductCard;