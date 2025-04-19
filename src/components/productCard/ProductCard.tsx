//import { useState } from "react";
import BotonComprar from "../BotonComprar/BotonComprar";
//import Especificaciones from "../Especificaciones/Especificaciones";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    idProducto: number;
    title: string;
    precio_real: number;
    precio_final: number;
    descuento: number;
    imagen: string;
    descripcion: string;

}

const ProductCard = ({ idProducto, title, precio_real, precio_final, descuento, imagen }: ProductCardProps) => {
    //const [, setMostrarDescripcion] = useState(false);
    const navigate = useNavigate();
    const verDetalle = () => {
        navigate(`/productos/${idProducto}`);
    };

    // const volver = () => {
    //     setMostrarDescripcion(false);
    // };
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
                <button className="detalle" onClick={verDetalle}>Ver Detalle</button>
            </div>

        </div>

    );
};

export default ProductCard;