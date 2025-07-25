import {useState} from "react";
import api from "../services/api"
import { useNavigate } from "react-router-dom";

function CategoryForm() {
    const[nombre, setNombre] = useState("");
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        const genero = {
            nombre
        };
        try{
            const respuesta = await api.post('/generos/', genero);
            console.log(respuesta);
            if (respuesta.status === 201) {
                alert(`Se creo el genero con id ${respuesta.data.id} y nombre ${respuesta.data.nombre}`);
                navigate('/categorias/listar/')
            } else {
                alert("Error al crear");
            }
        } catch (e) {
            console.log("error: ", e)
        }
    }
    return (
        <>
        <h2>Formulario Generos</h2>
        <form onSubmit={handleSubmit}>
            <input className="form-control" type="text" onChange={(e) => setNombre(e.target.value)} />
            <button className="btn btn-success mt-2" type="submit">Agregar</button>
        </form>
        </>
    );
}
export default CategoryForm;
