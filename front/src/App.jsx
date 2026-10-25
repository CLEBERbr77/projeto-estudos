import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import SetupUsuario from './pages/setupUsuario';
import Login from './components/formLogin'
import FormCadastro from './components/formCadastro/formCadastro'

const Home = () => <h1 className="text-2xl p-4">Página Inicial</h1>;
const Sobre = () => <h1 className="text-2xl p-4">Página Sobre</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-white text-black flex gap-4">
        <Link to="/" className="hover:underline">Início</Link>
        <Link to="/sobre" className="hover:underline">Sobre</Link>
        <Link to="/Dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/setupUsuario" className="hover:underline">Setup Usuário</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/cadastro" className="hover:underline">Cadastro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/setupUsuario" element={<SetupUsuario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<FormCadastro />} />
      </Routes>
    </BrowserRouter>
  );
}