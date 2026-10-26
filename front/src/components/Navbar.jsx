import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classmeeLogo from '../assets/classmee.svg';

const mainItems = [
  { label: 'Início', to: '/', end: true },
  { label: 'Visão Geral', to: '/dashboard' },
  { label: 'Disciplinas', to: '/disciplinas' },
  { label: 'Simulados', to: '/simulados' },
];

const siteItems = [
  { label: 'Configurações', to: '/configuracoes' },
  { label: 'Sobre', to: '/sobre' },
];

function NavItem({ label, to, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
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

function Conteudo({ onNavegar }) {
  return (
    <>
      <NavLink
        to="/"
        onClick={onNavegar}
        aria-label="Classmee, ir para o início"
        className="mb-6 flex w-full items-center justify-center gap-3"
      >
        <img src={classmeeLogo} alt="Classmee" className="h-20 w-auto" />
      </NavLink>

      <nav aria-label="Navegação principal" className="flex flex-1 flex-col">
        <div className="space-y-2">
          {mainItems.map((item) => (
            <NavItem key={item.to} {...item} onClick={onNavegar} />
          ))}
        </div>

        <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
          {siteItems.map((item) => (
            <NavItem key={item.to} {...item} onClick={onNavegar} />
          ))}
        </div>
      </nav>
    </>
  );
}

export default function Navbar({ aberto = false, onFechar = () => {} }) {
  // fecha a gaveta com Esc
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e) => e.key === 'Escape' && onFechar();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberto, onFechar]);

  return (
    <>
      {/* desktop: barra lateral fixa */}
      <aside className="hidden w-72 shrink-0 overflow-y-auto bg-[#0A1F4D] p-6 text-white lg:flex lg:flex-col">
        <Conteudo />
      </aside>

      {/* celular: gaveta */}
      {aberto && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/50" onClick={onFechar} aria-hidden="true" />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col overflow-y-auto bg-[#0A1F4D] p-6 text-white shadow-2xl"
          >
            <Conteudo onNavegar={onFechar} />
          </aside>
        </div>
      )}
    </>
  );
}