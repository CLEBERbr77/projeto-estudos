import { useState } from 'react';

export default function FormConteudo() {
    const [dadosConteudo, setDadosConteudo] = useState({
        conteudoId: "",
        name: "",
        descricao: "",
        status: false,
        dataConclusao: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosConteudo((dadosConteudoAntigos) => ({ ...dadosConteudoAntigos, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            className="mx-auto w-full max-w-xl space-y-6 rounded-xl bg-white p-6 shadow-md sm:p-8"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-semibold text-gray-900">Criar conteúdo</h2>

            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Insira o título do conteúdo
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={dadosConteudo.name}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                    Insira a descrição do conteúdo
                </label>
                <input
                    id="descricao"
                    type="text"
                    name="descricao"
                    value={dadosConteudo.descricao}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="dataConclusao" className="block text-sm font-medium text-gray-700">
                    Insira até que dia você deve estudar esse conteúdo
                </label>
                <input
                    id="dataConclusao"
                    type="date"
                    name="dataConclusao"
                    value={dadosConteudo.dataConclusao}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Criar conteúdo
            </button>
        </form>
    );
}