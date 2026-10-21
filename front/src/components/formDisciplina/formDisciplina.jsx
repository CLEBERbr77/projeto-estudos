export default function formDisciplina() {
    const [dadosDisciplina, setDadosDisciplina] = useState({nome: "", descricao: "",})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosDisciplina((dadosDisciplinaAntigos) => ({ ...dadosDisciplinaAntigos, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        const id = 1;

        return dadosDisciplina
    }


    return (
        <form className="formConteudoContainer" onSubmit={handleSubmit}>
            
            <div className="campoForm">
                <label>Insira o título da disciplina:</label>
                <input type="text" name="nome" value={dadosDisciplina.nome} onChange={handleChange} />
            </div>

            <div className="campoForm">
                <label>Insira a descrição da disciplina:</label>
                <input type="text" name="descricao" value={dadosDisciplina.descricao} onChange={handleChange} />
            </div>

            <input type="submit" value="Criar conteúdo" />

        </form>
    )
}