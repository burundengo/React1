import { Routes, Route, NavLink } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import CategoryForm from "../components/CategoryForm";

function CategoryPage() {
    return (
        <>
            <h1>Gestion categorias</h1>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <NavLink
                        to="/categorias/listar/"
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Listado
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/categorias/crear/"
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Crear
                    </NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="listar" element={<CategoryList />} />
                <Route path="crear" element={<CategoryForm />} />
            </Routes>
        </>
    );
}

export default CategoryPage;