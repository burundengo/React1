import { useEffect, useState } from "react";
import api from "../services/api";
import VinylItem from "./VinylItem";

function VinylList() {
    const [vinilos, setVinilo] = useState([]);

    async function fetchVinilos() {
        try {
            const response = await api.get("albums/")
            if (response.status === 200){
                console.log(response.data)
                setVinilo(response.data)
            }
        } catch(e){
            console.log("Se ha producido un error inesperado")
        }
    }

    useEffect(() => {
        fetchVinilos();
    }, [])

    return (
        <>
        <h2>Listado de Vinilos</h2>

        <div>
            {
                vinilos.map((v) =>( 
                <VinylItem /> 
            ))}
           
        </div>
        </>
    )
}

export default VinylList;