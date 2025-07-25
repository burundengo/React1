import { useEffect, useState} from "react";
import api from "../services/api";

function CategoryList() {
  const [categorias, setCategorias] = useState([]);

  async function fetchCategorias() {
    try {
        const categoria_api = await api.get('/generos/');
        console.log(categoria_api);
        setCategorias(categoria_api.data)

    } catch (e) {console.log('Se produjo un error');
    }
  }

  async function deleteCategory(id) {
    try {
      console.log(id);
      const response = await api.delete(`/generos/${id}/`);
      console.log(response);
      if (response.status === 204) {
        alert("Genero eliminado");
        fetchCategorias();
      } else {
        alert("No se pudo eliminar");
      }
    } catch (e) {
      console.log('Se ha producido un error');
    }
  }

  useEffect(() => {
    fetchCategorias();
  }, [])

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
  {categorias.map((c, idx) => {
    console.log("Renderizando fila:", c);
    return (
      <tr key={c.id}>
        <td>{c.id}</td>
        <td>{c.nombre}</td>
        <td>
          <button className="btn btn-danger" onClick={() => deleteCategory(c.id)}>
            Eliminar
          </button>
        </td>
      </tr>
    );
  })}
</tbody>
          </table>
      )
}

export default CategoryList;