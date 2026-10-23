import { useState } from 'react';

export default function FormLogin() {
    const [credenciaisUsuario, setCredenciaisUsuario] = useState({
        usuario: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredenciaisUsuario((atual) => ({ ...atual, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const labelClasses = 'block text-sm font-medium text-slate-700';
    const inputClasses = 'mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100';

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-md space-y-6 rounded-2xl border-2 border-amber-200 bg-linear-to-br from-amber-50 via-white to-violet-50 p-6 shadow-xl shadow-slate-900/10 sm:p-8"
        >
            <header className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-indigo-950">
                    Entrar
                </h2>
                <p className="text-sm text-slate-600">
                    Acesse sua conta para continuar.
                </p>
            </header>

            <div>
                <label className={labelClasses} htmlFor="usuario">
                    E-mail ou nome de usuário
                </label>
                <input
                    className={inputClasses}
                    id="usuario"
                    name="usuario"
                    value={credenciaisUsuario.usuario}
                    type="text"
                    autoComplete="username"
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label className={labelClasses} htmlFor="password">
                    Senha
                </label>
                <input
                    className={inputClasses}
                    id="password"
                    name="password"
                    value={credenciaisUsuario.password}
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    required
                />
            </div>

            <button
                className="w-full rounded-lg bg-linear-to-r from-indigo-800 to-violet-700 px-4 py-3 font-semibold text-white shadow-md shadow-indigo-900/20 transition hover:from-indigo-700 hover:to-violet-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-200 active:from-amber-300 active:to-orange-300 active:text-indigo-950"
                name="entrar"
                type="submit"
            >
                Entrar
            </button>
        </form>
    );
}