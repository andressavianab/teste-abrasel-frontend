import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Default } from "./Layouts/Default";
import { Ceps } from "./pages/Cep/Index";
import { Palindromes } from "./pages/Palindromos/Index";
import { Cashier } from "./pages/Caixa/Index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
            <Route path="/cep" element={<Ceps />} />
            <Route path="/palindromos" element={<Palindromes />} /> 
            <Route path="/caixa" element={<Cashier />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
