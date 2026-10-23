import { useState } from 'react';

export default function FormCadastro() {
    const [credenciaisUsuario, setCredenciaisUsuario] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'confirmacaoSenha') {
            setConfirmacaoSenha(value);
        } else {
            setCredenciaisUsuario((atual) => ({ ...atual, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (credenciaisUsuario.password !== confirmacaoSenha) {
            return;
        }
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
                    Criar conta
                </h2>
                <p className="text-sm text-slate-600">
                    Preencha seus dados para se cadastrar.
                </p>
            </header>

            <div>
                <label className={labelClasses} htmlFor="username">
                    Nome de usuário
                </label>
                <input
                    className={inputClasses}
                    id="username"
                    name="username"
                    value={credenciaisUsuario.username}
                    type="text"
                    autoComplete="username"
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label className={labelClasses} htmlFor="email">
                    E-mail
                </label>
                <input
                    className={inputClasses}
                    id="email"
                    name="email"
                    value={credenciaisUsuario.email}
                    type="email"
                    autoComplete="email"
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
                    autoComplete="new-password"
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label className={labelClasses} htmlFor="confirmacaoSenha">
                    Confirme sua senha
                </label>
                <input
                    className={inputClasses}
                    id="confirmacaoSenha"
                    name="confirmacaoSenha"
                    value={confirmacaoSenha}
                    type="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                    required
                />
            </div>

            <button
                className="w-full rounded-lg bg-gradient-to-r from-indigo-800 to-violet-700 px-4 py-3 font-semibold text-white shadow-md shadow-indigo-900/20 transition hover:from-indigo-700 hover:to-violet-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-200 active:from-amber-300 active:to-orange-300 active:text-indigo-950"
                name="criarConta"
                type="submit"
            >
                Criar conta
            </button>
        </form>
    );
}