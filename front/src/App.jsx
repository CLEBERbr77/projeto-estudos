import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1 className="text-2xl p-4">Página Inicial</h1>;
const Sobre = () => <h1 className="text-2xl p-4">Página Sobre</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/" className="hover:underline">Início</Link>
        <Link to="/sobre" className="hover:underline">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}
