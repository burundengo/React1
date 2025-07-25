import api from "../services/api";

function VinylItem({vinilo, onDelete}){
    const {id, titulo, artista, genero, portada, precio, publicacion, stock} = vinilo;

    const eliminarVinilo = async () => {
        if(window.confirm("Estás a punto de eliminar este vinilo de la lista")) {
            try {
                await api.delete(`/albums/${id}/`);
                if (onDelete) onDelete(id, titulo, artista.nombre);
            } catch(e) {
                alert("Error al eliminar el vinilo de la lista")
            }
        }
    }
    return(
        <article className="m-2">
            <div className="card h-100" style={{width: "24rem"}}>
                <img src={portada} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p>artista: {artista.nombre}</p>
                    <p className="card-text">publicacion: {publicacion} </p>
                    <p className="card-text">genero: {genero.map((g) => g.nombre).join(", ")}</p>
                    <p className="card-text">precio: {precio} </p>
                    <p className="card-text">stock: {stock} </p>
                    <button type="button" onClick={eliminarVinilo} className="btn btn-danger">Eliminar Vinilo</button>
                </div>
            </div>
        </article>
    )
}

export default VinylItem;