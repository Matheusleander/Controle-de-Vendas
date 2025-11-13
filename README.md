# 💼 Controle de Vendas

## 📋 Descrição
Projeto desenvolvido como parte do curso de **Programador Web**, com o objetivo de praticar o uso das principais tecnologias para desenvolvimento de aplicações web.  
O sistema tem como finalidade cadastrar produtos, vendedores, registrar vendas e fazer uma lista, realizar **login** e direcionar o usuário para a **página principal** do sistema de controle de vendas.

## 🧰 Tecnologias Utilizadas
- **Banco de dados:** MySQL  
- **Ferramentas:** MySQL Workbench, XAMPP, Visual Studio Code  
- **Front-end:** HTML, CSS, Bootstrap, JavaScript  
- **Back-end:** Node.js

## 🗂️ Estrutura do Projeto
```
controle-de-vendas/
├── database/
│   └── controlevendas.sql
├── node_modules/
├── public/
│   ├── css/
│   │   └── estilo.css
│   ├── js/
│   │   ├── validacoes.js
│   │   ├── cadastro-produtos.js
│   │   ├── cadastro-vendas.js
│   │   └── ...
│   ├── index.html
│   ├── listagem.html
│   ├── login.html
│   └── registro-vendas.html
├── src/
│   ├── db.js
│   └── server.js
├── .env
├── package.json
└── package-lock.json
```

## ⚙️ Funcionalidades
- Cadastro de **pessoas físicas e jurídicas**  
- Sistema de **login e autenticação**  
- Redirecionamento para a **página principal** após login  
- Estrutura modular com separação entre **front-end**, **back-end** e **banco de dados**

## 🚀 Como Executar o Projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env` com suas credenciais do banco de dados MySQL.  
3. Inicie o servidor:
   ```bash
   node src/server.js
   ```
4. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```

## 👨‍💻 Autor
Trabalho desenvolvido no curso de **Programador Web**, com foco em aprendizado prático de tecnologias web.
