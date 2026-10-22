import { useState } from "react"
import './formConteudo.css';


export default function formConteudo() {
    const [dadosConteudo, setDadosConteudo] = useState({ id:"", nome: "", descricao: "", status: false, dataConclusao: "", });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosConteudo((dadosConteudoAntigos) => ({ ...dadosConteudoAntigos, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            // Faz a chamada para a URL do backend
            const response = await fetch('http://localhost:4001/usuarios', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', // Avisa o backend que estamos enviando JSON
                },
                body: JSON.stringify(formData), // Transforma o objeto do React em texto JSON
            });

            const dadosRetornados = await response.json();

            if (response.ok) {
                // 3. Se o controller do backend respondeu status 201/200
                setStatus('Formulário enviado com sucesso!');
                setFormData({ id:"", nome: "", descricao: "", status: "", dataConclusao: "", }); // Limpa o formulário
            } else {
                // Se o controller respondeu status 400 ou 500 (ex: validação falhou)
                setStatus(`Erro: ${dadosRetornados.erro}`);
            }
            } catch (error) {
            // Se o servidor backend estiver desligado, cai aqui
            setStatus('Erro ao conectar com o servidor.');
            }
        };
    }


    return (
        <form className="formConteudoContainer" onSubmit={handleSubmit}>
            
            <div className="campoForm">
                <label>Insira o título do contéudo: </label>
                <input type="text" name="nome" value={dadosConteudo.nome} onChange={handleChange} />
            </div>

            <div className="campoForm">
                <label>Insira a descrição do conteúdo</label>
                <input type="text" name="descricao" value={dadosConteudo.descricao} onChange={handleChange} />
            </div>

            <div className="campoForm">
                <label>Insira até que dia você deve estudar esse conteúdo:</label>
                <input type="date" name="dataConclusao" value={dadosConteudo.dataConclusao} onChange={handleChange} />
            </div>

            <input type="submit" value="Criar conteúdo" />

        </form>

    )

}