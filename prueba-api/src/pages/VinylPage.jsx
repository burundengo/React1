import { NavLink, Route, Routes } from "react-router-dom";
import VinylList from "../components/VinylList";
import VinylForm from "../components/VinylForm";

function VinylPage() {
    return (
        <>
            <h1>Gestion Vinilos</h1>
            <NavLink to={"/vinilos/listar/"}>Listar Vinilos</NavLink>{" | | "}
            <NavLink to={"/vinilos/crear/"}>Crear Vinilos</NavLink>

            <Routes>
               <Route path= "listar" element={<VinylList />} />
               <Route path= "crear" element={<VinylForm />} /> 
            </Routes>
        
        </>
    )
}

export default VinylPage;