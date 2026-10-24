import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import SetupUsuario from './pages/setupUsuario';
import Login from './components/formLogin';
import FormCadastro from './components/formCadastro/formCadastro';
import classmeeLogo from './assets/classmee.svg';

const Home = () => <h1 className="p-4 text-2xl">Página Inicial</h1>;
const Sobre = () => <h1 className="p-4 text-2xl">Página Sobre</h1>;

const navItems = [
  { label: 'Início', to: '/', end: true },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Dashboard', to: '/Dashboard' },
  { label: 'Setup Usuário', to: '/setupUsuario' },
  { label: 'Login', to: '/login' },
  { label: 'Cadastro', to: '/cadastro' },
];

function NavBar() {
  return (
    <header className="bg-[#0A1F4D] text-white">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex items-center gap-4 px-4 py-3 sm:px-6"
      >
        <NavLink to="/" aria-label="Classmee, ir para o início" className="shrink-0">
          <img src={classmeeLogo} alt="Classmee" className="h-9 w-auto" />
        </NavLink>

        <ul className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.to} className="shrink-0">
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

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