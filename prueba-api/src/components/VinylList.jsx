import { useEffect, useState } from "react";
import api from "../services/api";
import VinylItem from "./VinylItem";

function VinylList() {
    const [vinilos, setVinilo] = useState([]);

    async function fetchVinilos() {
        try {
            const response = await api.get("albums/")
            if (response.status === 200){
                setVinilo(response.data)
            }
        } catch(e){
            console.log("Se ha producido un error inesperado")
        }
    }

    useEffect(() => {
        fetchVinilos();
    }, [])

    const handleDelete = (id, titulo, artista) => {
        setVinilo(vinilos.filter(v => v.id !== id));
        alert(`Vinilo eliminado: "${titulo}" de ${artista}`);
    };

    return (
        <>
        <h2>Listado de Vinilos</h2>
        <div className="d-flex flex-wrap align-items-stretch m-8">
            {vinilos.map((v) =>( 
                <VinylItem key={v.id} vinilo={v} onDelete={handleDelete} /> 
            ))}
        </div>
        </>
    )
}

export default VinylList;