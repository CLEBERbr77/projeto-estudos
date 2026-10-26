import classmeLogo from "../../assets/classme.svg";

const Header = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-20 border-r border-gray-200 bg-white sm:w-64">
      <div className="flex h-full flex-col px-3 py-6 sm:px-4">
        <div className="mb-8 flex items-center justify-center gap-3 sm:justify-start">
          <span className="hidden text-lg font-semibold text-black sm:inline">
            <img src={classmeLogo} alt="Classme" className="h-9 w-auto" />
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-2" aria-label="Navegação principal">
          <a
            href="#"
            aria-label="Início"
            className="flex items-center justify-center gap-3 rounded-lg bg-sky-50 px-3 py-3 text-sm font-medium text-black transition hover:bg-sky-100 sm:justify-start"
          >
            <span className="hidden sm:inline">Início</span>
          </a>
          <a
            href="#"
            aria-label="Timer"
            className="flex items-center justify-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-black transition hover:bg-gray-100 sm:justify-start"
          >
            <span className="hidden sm:inline">Timer</span>
          </a>
          <a
            href="#"
            aria-label="Calendário"
            className="flex items-center justify-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-black transition hover:bg-gray-100 sm:justify-start"
          >
            <span className="hidden sm:inline">Calendário</span>
          </a>
          <a
            href="#"
            aria-label="Configurações"
            className="flex items-center justify-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-black transition hover:bg-gray-100 sm:justify-start"
          >
            <span className="hidden sm:inline">Configurações</span>
          </a>
        </nav>

        <button
          type="button"
          className="mt-6 flex items-center justify-center rounded-lg bg-indigo-700 px-2 py-3 text-sm font-medium text-white transition hover:bg-sky-500 sm:px-4"
        >
          <span className="sm:hidden" aria-hidden="true">Entrar</span>
          <span className="hidden sm:inline">Entrar/Registrar-se</span>
        </button>
      </div>
    </aside>
  )
}

export default Header
