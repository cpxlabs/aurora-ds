import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Acesso } from "./pages/Acesso";
import { Dashboard } from "./pages/Dashboard";
import { Perfil } from "./pages/Perfil";
import { Configuracoes } from "./pages/Configuracoes";
import { useAuth } from "./context/AuthContext";
import "./App.css";

function RotaProtegida({ children }: { children: React.ReactNode }) {
  const { autenticado } = useAuth();
  return autenticado ? <>{children}</> : <Navigate to="/acesso" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/acesso" element={<Layout />}>
        <Route index element={<Acesso />} />
      </Route>

      <Route
        path="/"
        element={
          <RotaProtegida>
            <Layout />
          </RotaProtegida>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="configuracoes" element={<Configuracoes />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
