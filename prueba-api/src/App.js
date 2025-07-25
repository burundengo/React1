import CategoryPage from "./pages/CategoryPage";
import ArtistPage from "./pages/ArtistPage";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import VinylPage from "./pages/VinylPage";

function App () {
  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/categorias/">Categorias</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/artistas/">Artistas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/vinilos/">Vinilos</NavLink>
              </li>
            </ul>
          </div>  
        </nav>

        <Routes>
          <Route path="/categorias/*" element={<CategoryPage />}></Route>
          <Route path="/artistas/*" element={<ArtistPage />}></Route>
          <Route path="/vinilos/*" element={<VinylPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
