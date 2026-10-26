import { useState } from 'react';

export default function FormCadastro() {
    const [credenciaisUsuario, setCredenciaisUsuario] = useState({username: '', email: '', password: ''})
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'confirmacaoSenha') {
            setConfirmacaoSenha(value);
        } else {
            setCredenciaisUsuario((atual) => ({ ...atual, [name]: value }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (credenciaisUsuario.password !== confirmacaoSenha) {
            return;
        }
    }

    return (
    
        <form
        onSubmit={handleSubmit}
        >
            <label htmlFor='username'>Insira seu nome de usuários</label>
            <input
            name='username'
            value={credenciaisUsuario.username} 
            type='text'
            onChange={handleChange}
            required
            />

            <label htmlFor='email'>Insira seu e-mail</label>
            <input
            name='email'
            value={credenciaisUsuario.email} 
            type='email'
            onChange={handleChange}
            required
            />

            <label htmlFor='password'>Insira sua senha</label>
            <input
            name='password'
            value={credenciaisUsuario.password} 
            type='password'
            onChange={handleChange}
            required
            />

            <label htmlFor='password'>Confirme sua senha</label>
            <input
            name='confirmacaoSenha'
            value={confirmacaoSenha} 
            type='password'
            onChange={handleChange}
            required
            />

            <input name='criarConta' value='Criar conta' type='submit' />

        </form>
    )
}