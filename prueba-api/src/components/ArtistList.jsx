import { useEffect, useState } from "react";
import api from "../services/api";

function ArtistList() {
  const [Artistas, setArtistas] = useState([]); //hooks

  async function fetchArtistas() {
    try {
      const artistas_api = await api.get("/artistas/");
      console.log(artistas_api); // promise
      setArtistas(artistas_api.data);
    } catch (e) {
      console.log("Se produjo un error");
    }
  }

  async function deleteArtist(id) {
    try {
      console.log(id);
      const response = await api.delete(`/artistas/${id}/`);
      console.log(response);
      if (response.status === 204) {
        alert("Artista eliminado");
        fetchArtistas();
      } else {
        alert("No se pudo eliminar");
      }
    } catch (e) {
      console.log("Se ha producido un error");
    }
  }

  useEffect(() => {
    fetchArtistas();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {Artistas.map((a) => (
          <tr key={a.id}>
            <td>{a.id}</td>
            <td>{a.nombre}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deleteArtist(a.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ArtistList;