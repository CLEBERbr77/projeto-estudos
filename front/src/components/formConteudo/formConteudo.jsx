import { useState } from "react"
import './formConteudo.css';


export default function formConteudo() {
    const [dadosDisciplina, setDadosDisciplina] = useState({id:"", nome: "", descricao: "", status: false, dataConclusao: "", });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosDisciplina((dadosDisciplinaAntigos) => ({ ...dadosDisciplinaAntigos, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <form className="formConteudoContainer" onSubmit={handleSubmit}>
            
            <div className="campoForm">
                <label>Insira o título do contéudo: </label>
                <input type="text" name="nome" value={dadosDisciplina.nome} onChange={handleChange} />
            </div>

            <div className="campoForm">
                <label>Insira a descrição do conteúdo</label>
                <input type="text" name="descricao" value={dadosDisciplina.descricao} onChange={handleChange} />
            </div>

            <div className="campoForm">
                <label>Insira até que dia você deve estudar esse conteúdo:</label>
                <input type="date" name="dataConclusao" value={dadosDisciplina.dataConclusao} onChange={handleChange} />
            </div>

            <input type="submit" value="Criar conteúdo" />

        </form>

    )

}