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

  useEffect(() => {
    fetchCategorias();
  }, [])

      return (
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                  </tr>
              </thead>
              <tbody>
                  {categorias.map(c => 
                  <tr>
                      <td>{c.id}</td>
                      <td>{c.nombre}</td>
                      <td><button>Eliminar</button></td>    
                  </tr>
                  )}
              </tbody>
          </table>
      )
}

export default CategoryList;