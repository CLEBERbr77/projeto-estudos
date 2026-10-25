import { NavLink } from 'react-router-dom';
import classmeeLogo from '../../assets/classmee.svg';

// Telas do app
const mainItems = [
  { label: 'Início', to: '/', end: true },
  { label: 'Visão Geral', to: '/Dashboard' },
  { label: 'Disciplinas', to: '/disciplinas' },
  { label: 'Simulados', to: '/simulados' }, 
];

const siteItems = [
  { label: 'Setup Usuário', to: '/setupUsuario' },
  { label: 'Login', to: '/login' },
  { label: 'Cadastro', to: '/cadastro' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Configurações', to: '/configuracoes' }, 
];

function NavItem({ label, to, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
          isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 overflow-y-auto bg-[#0A1F4D] p-6 text-white lg:flex lg:flex-col">
      <NavLink to="/" aria-label="Classmee, ir para o início" className="mb-6 flex w-full items-center justify-center gap-3">
        <div>
          <img src={classmeeLogo} alt="Classmee" className="h-20 w-auto" />
        </div>
      </NavLink>

      <nav aria-label="Navegação principal" className="flex flex-1 flex-col">
        <div className="space-y-2">
          {mainItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </div>

        <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
          {siteItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </div>
      </nav>
    </aside>
  );
}