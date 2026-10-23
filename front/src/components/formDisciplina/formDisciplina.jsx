import { useState } from 'react';
import api from '../../services/api';

export default function FormDisciplina() {
  const [disciplina, setDisciplina] = useState({ name: '', descricao: '' });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post('/disciplinas', disciplina);
      setDisciplina({ name: '', descricao: '' });
      alert('Disciplina cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar disciplina:', error);
      alert('Erro ao cadastrar disciplina.');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDisciplina((atual) => ({ ...atual, [name]: value }));
  }

  return (
    <section className="mx-auto w-full max-w-xl rounded-xl bg-white p-6 shadow-md sm:p-8">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Disciplinas</h2>
        <p className="mt-1 text-sm text-gray-600">Cadastre uma disciplina e, se desejar, adicione uma descrição.</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Insira a disciplina
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome da disciplina"
            value={disciplina.name}
            onChange={handleChange}
            required
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
            Descrição <span className="font-normal text-gray-500">(opcional)</span>
          </label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            placeholder="Descrição da disciplina"
            value={disciplina.descricao}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Cadastrar Disciplina
        </button>
      </form>
    </section>
  );
}