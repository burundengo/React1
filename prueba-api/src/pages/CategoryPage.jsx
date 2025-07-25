import { Routes, Route, NavLink } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import CategoryForm from "../components/CategoryForm";
function CategoryPage() {
    return (
        <>
            <h1>Gestion categorias</h1>
            <NavLink to={"/categorias/listar/"}>Listado</NavLink>
            <NavLink to={"/categorias/crear/"}>Crear</NavLink>

            <Routes>
               <Route path="listar" element={<CategoryList />}></Route>
               <Route path="crear" element={<CategoryForm />}></Route>
            </Routes>
        </>
    );
}

export default CategoryPage;