import { useState } from 'react';
import api from '../../services/api';

export default function FormDisciplina() {
  const [disciplina, setDisciplina] = useState({ nome: '', descricao: '' });
  const [disciplinaLista, setDisciplinaLista] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    setDisciplinaLista((lista) => [...lista, disciplina]);

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
            <label for="nome">Insira a disciplina</label>

            <select>
                <option value="Língua Portuguesa">Língua Portuguesa</option>
                <option value="Literatura">Literatura</option>
                <option value="Redação">Redação</option>
                <option value="Língua Inglesa">Inglês</option>
                <option value="Artes">Artes</option>
                <option value="Educação Física">Educação Física</option>
                <option value="Matemática">Matemática</option>
                <option value="História">História</option>
                <option value="Geografia">Geografia</option>
                <option value="Filosofia">Filosofia</option>
                <option value="Sociologia">Sociologia</option>
                <option value="Biologia">Biologia</option>
                <option value="Física">Física</option>
                <option value="Química">Química</option>
              {disciplinaLista.map((item, index) => (
                <option key={`${item.nome}-${index}`} value={item.nome}>
                  {item.nome}
                </option>
              ))}
            </select>
            <input
            type="text"
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