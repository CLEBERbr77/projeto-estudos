export default function Header({ user = {} }) {
    const name = user.name?.trim() || 'Usuário';
    const { role, avatar } = user;

    return (
        <header className="flex h-17.5 items-center justify-end bg-white px-6 md:px-12">
            <div className="flex items-center gap-3">
                {avatar ? (
                    <img
                        src={avatar}
                        alt={name}
                        className="h-11 w-11 rounded-full object-cover"
                    />
                ) : (
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-pink-300 text-sm font-bold text-white">
                        {name.charAt(0).toUpperCase()}
                    </div>
                )}
                <div className="leading-tight">
                    <p className="text-sm font-bold text-slate-800">{name}</p>
                    {role && <p className="text-xs text-slate-500">{role}</p>}
                </div>
                <button
                    type="button"
                    aria-label="Abrir menu do usuário"
                    className="grid h-5 w-5 place-items-center rounded-full border border-slate-300 text-slate-500"
                >
                    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </header>
    );
}