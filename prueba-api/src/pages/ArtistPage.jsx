import { Routes, Route, NavLink } from "react-router-dom";
import ArtistList from "../components/ArtistList";
import ArtistForm from "../components/ArtistForm";

function ArtistPage() {
  return (
    <>
      <h1>Gestion Artistas</h1>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <NavLink
            to="/artistas/listar/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Listado
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/artistas/crear/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Crear
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/listar/" element={<ArtistList />} />
        <Route path="/crear/" element={<ArtistForm />} />
      </Routes>
    </>
  );
}

export default ArtistPage;
