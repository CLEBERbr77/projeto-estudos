import { useState } from 'react';
import api from '../../services/api';

export default function FormDisciplina() {
  const [disciplina, setDisciplina] = useState({ nome: '', descricao: '' });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post('/disciplinas', disciplina);
      setDisciplina({ nome: '', descricao: '' });
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
    <div style={{ padding: '20px' }}>
      <h2>Gerenciamento de Disciplinas</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label htmlFor="nome">Insira a disciplina</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome da disciplina"
            value={disciplina.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
            <input
            type="text"
            name="descricao"
            placeholder="Descrição da disciplina"
            value={disciplina.descricao}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar Disciplina</button>
      </form>
    </div>
  );
}