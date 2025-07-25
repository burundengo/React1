import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function VinylForm() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [fecha, setFecha] = useState("");
    const [portada, setPortada] = useState(null);
    const [artista, setArtista] = useState("");
    const [genero, setGenero] = useState("");
    const [generosSeleccionados, setGenerosSeleccionados] =useState([]);

    const [artistasDisponibles, setArtistasDisponibles] = useState([]);
    const [generosDisponibles, setGenerosDisponibles] = useState([]);

    useEffect(() => {
        async function  fetchDatos() {
            try {
                const respuestaArtistas = await api.get("/artistas/");
                const respuestaGeneros = await api.get("/generos/");
                setArtistasDisponibles(respuestaArtistas.data);
                setGenerosDisponibles(respuestaGeneros.data);
            } catch(e) {
                console.log("Error al cargar artistas o generos", e)
            }
            
        }
        fetchDatos();
    }, []);

    function agregarArchivo(e) {
        const archivo = e.target.files[0];
        setPortada(archivo);
    }

    function seleccionGenero(e) {
        const opciones = Array.from(e.target.selectedOptions);
        const ids = opciones.map((o) => parseInt(o.value));
        setGenerosSeleccionados(ids);
    }

    const enviarFormulario = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("precio", precio);
        formData.append("stock", stock);
        formData.append("publicacion", fecha);
        if (portada) formData.append("portada", portada);
        formData.append("artista", artista ? artista : null);
        generosSeleccionados.forEach((id) => {
          formData.append("genero", id);
        });

        try {
            const response = await api.post("/albums/", formData, {
                headers: { "Content-Type": "multipart/form-data"}
            });

            if (response.status === 201 || response.status === 200) {
                alert ("Vinilo creado correctamente");
                navigate("/vinilos/listar/");
            } else {
                alert("Error al crear vinilo");
            }
        } catch (e) {
            alert("Error: " + e);
            console.log(e);
        }
    };
    
      return (
    <div className="ContainerVF">
      <div className="ContainerH2">
        <h2 className="H2-VF">Formulario vinilos</h2>
      </div>
      <form onSubmit={enviarFormulario} className="vinylForm">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <input type="file" onChange={agregarArchivo} />

        <select
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          required
        >
          <option value="">Selecciona un artista</option>
          {artistasDisponibles.map((a) => (
            <option key={a.id} value={a.id}>
              {a.nombre}
            </option>
          ))}
        </select>

        <select multiple onChange={seleccionGenero}>
          {generosDisponibles.map((g) => (
            <option key={g.id} value={g.id}>
              {g.nombre}
            </option>
          ))}
        </select>

        <button type="submit">Crear vinilo</button>
      </form>
    </div>
  );
}

export default VinylForm;