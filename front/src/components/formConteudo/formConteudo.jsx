import React, { useState, useEffect } from 'react';
import api from '../../services/api';;


export default function FormConteudo() {
    const [dadosConteudo, setDadosConteudo] = useState({ conteudoId:"", nome: "", descricao: "", status: false, dataConclusao: "", });

    useEffect(() => {
        carregarConteudos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosConteudo((dadosConteudoAntigos) => ({ ...dadosConteudoAntigos, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        
        
            
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