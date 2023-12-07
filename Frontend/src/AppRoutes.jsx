import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Default } from "./Layouts/Default";
import { Ceps } from "./Ceps";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
            <Route path="/cep" element={<Ceps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
