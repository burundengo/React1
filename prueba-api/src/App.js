import CategoryPage from "./pages/CategoryPage";
import ArtistPage from "./pages/ArtistPage";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import VinylPage from "./pages/VinylPage";

function App () {
  return (
    <Router>
      <nav>
        <NavLink to="/categorias/">Categorias</NavLink>
        <br />
        <NavLink to="/artistas/">Artistas</NavLink>
        <br />
        <NavLink to="/vinilos/">Vinilos</NavLink>
      </nav>

      <Routes>
        <Route path="/categorias/*" element={<CategoryPage />}></Route>
        <Route path="/artistas/*" element={<ArtistPage />}></Route>
        <Route path="/vinilos/*" element={<VinylPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
