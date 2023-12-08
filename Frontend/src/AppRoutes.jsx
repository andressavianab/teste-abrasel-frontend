import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Default } from "./Layouts/Default";
import { Ceps } from "./pages/Cep/Index";
import { Palindromos } from "./pages/Palindromos/Index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
            <Route path="/cep" element={<Ceps />} />
            <Route path="/palindromos" element={<Palindromos />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
