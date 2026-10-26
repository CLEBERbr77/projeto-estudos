import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import useAuth from '../hooks/useAuth';

export default function AppLayout() {
  const { user, sair } = useAuth();

  const [menuAberto, setMenuAberto] = useState(false);
  const fecharMenu = useCallback(() => setMenuAberto(false), []);

  return (
    <div className="flex min-h-screen bg-white font-['Nunito',sans-serif]">
      <Navbar aberto={menuAberto} onFechar={fecharMenu} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header user={user} onAbrirMenu={() => setMenuAberto(true)} onSair={sair} />
        <div className="flex-1 bg-[#F4F6FA]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}