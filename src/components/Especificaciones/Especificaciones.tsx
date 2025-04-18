interface EspecificacionesProps {
    descripcion: string;
    onVolver: () => void;
}

const Especificaciones = ({ descripcion, onVolver }: EspecificacionesProps) => {
    return (
        <div>
            <p>{descripcion}</p>
            <button 
            className="detalle"
            onClick={onVolver}>Volver</button>
        </div>
    );
};

export default Especificaciones;
