import {useState} from "react";
import api from "../services/api"

function CategoryForm() {
    const[nombre, setNombre] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const genero = {
            nombre
        };
        try{
            const respuesta = await api.post('/generos/', genero);
            console.log(respuesta);
            if (respuesta.status === 201) {
                alert("Se creo genero");
            } else {
                alert("Error al crear");
            }
        } catch (e) {
            console.log("error: ", e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
            <button type="submit">Agregar</button>
        </form>
    );
}
export default CategoryForm;
