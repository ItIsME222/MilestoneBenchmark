import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import Main from "./pages/MainPage";
import DeleteProduct from "./pages/DeleteProduct";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/CreateProduct" element={<CreateProduct />} />
      <Route path="/EditProduct" element={<EditProduct />} />
      <Route path="/DeleteProduct" element={<DeleteProduct />} />
    </Routes>
  );
}

export default AppRoutes;
