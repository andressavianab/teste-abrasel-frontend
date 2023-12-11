import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Default } from "./Layouts/Default";
import { Ceps } from "./pages/Cep/Index";
import { Palindromes } from "./pages/Palindromos/Index";
import { Cashier } from "./pages/Caixa/Index";
import { Vehicle } from "./pages/Veiculo/Index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Navigate to="/palindromos" />} />
          <Route path="/cep" element={<Ceps />} />
          <Route path="/palindromos" element={<Palindromes />} />
          <Route path="/caixa" element={<Cashier />} />
          <Route path="/veiculo" element={<Vehicle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
