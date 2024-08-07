import "./MyForm.css";

import { useState } from 'react';

const MyForm = ({ userName, userEmail }) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);

    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    // 5 - Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio);

    // Validação
    // Envio

    // 7 - Limpar Form
    setName("");
    setEmail("");
    setBio("");
    };
    
    console.log(name, email);

  return (
    <div>
        {/* 1 - Criação do Formulário */}
        {/* 5 - Envio de formulário */}
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" 
                onChange={handleName}
                // 6 - Controlled input
                value={name || ""}
                />   
            </div>

            {/* 2 - Label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                <input type="text" name="email" placeholder="Digite o seu e-mail" 
                /* 4 - Simplificando manipulação de dados */
                onChange={(e) => setEmail(e.target.value)}
                // 6 - Controlled input 
                value={email || ""}
                />
            </label>

            {/* 8 - Textarea */}
            <label>                
                <span>Bio:</span>
                <textarea name="Bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}/>
            </label>

            {/* 9 - Select */}
            <label>
                <span>Função:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            
            <input type="submit" value="Enviar"/>

        </form>
    </div>
  );
};

export default MyForm