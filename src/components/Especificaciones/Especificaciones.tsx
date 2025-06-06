// Especificaciones.tsx
interface EspecificacionesProps {
  descripcion: string
  onVolver: () => void
}

const Especificaciones = ({ descripcion, onVolver }: EspecificacionesProps) => {
  return (
    <div className="product-card" style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Descripción del Producto</h2>
      <p style={{ marginBottom: "1.5rem", textAlign: "center" }}>{descripcion}</p>
      <button className="btn-volver" onClick={onVolver}>
        Volver
      </button>
    </div>
  )
}

export default Especificaciones
