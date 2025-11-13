//criar o servidor em node.js, configura o Express
//define os endpoints (endereços) que o front-end
//pode acessar para enviar ou  receber dados.

//importa o pacote Express para criar o servidor HTTP
const express = require('express');

//importa o pacote body-parser para ler dados enviados
//pelo formulário
const bodyParser = require('body-parser');

//importa o cors
const cors = require('cors');

//importa o arquivo de conexão com  banco de db.js
const db = require('./db');

//importa as variáveis do arquivo .env
require('dotenv').config();

//cria a aplicasção Express
const app = express();

//habilidade cors para todas as origens
app.use(cors());

//permite que o servidor leia dados enviados no formato JSON
app.use(bodyParser.json());

//permite que o servidor leia dados enviados via formulário HTML
app.use(bodyParser.urlencoded({ extended: true }));

//faz com que o servidor sirva os arquivos da pasta 'public',
//ou seja, o navegador pode acessar tudo que está dentro dela
app.use(express.static('public'));

//Rota cadastro cliente PF ou PJ, esta rota será chamada
//quando formulário de cadastrto for enviado. Ela vai ler
//os dados do formulário e inserir no banco de dados.

app.post('/cadastrar', async (req, res) => {
    const { tipo, nome, cpf, dataNascimento, cnpj, razaoSocial} = req.body;

    try {
        //validação básica
        if(!nome || !tipo){
            console.log('Campos obrigatórios ausentes.');
            return res.status(400).json({message: 'Campos obrigatórios ausentes.'})
        }
        if(tipo === 'PF'){
            //cadastrar pessoa física
            const [result] = await db.query(
                'INSERT INTO PessoaFisica (nome, cpf, dataNascimento) VALUES (?, ?, ?)',
                [nome, cpf, dataNascimento || null]
            );
            console.log('Pessoa física cadastrada ID:', result.insertID);
            return res.status(200).json({message: 'Pessoa física cadastrada com sucesso.'});
        }
        if(tipo === 'PJ'){
            //cadastrar pessoa jurídica
            const [result] = await db.query(
                'INSERT INTO PessoaJuridica (nomeFantasia, cnpj, razaoSocial ) VALUES (?, ?, ?)',
                [ nome, cnpj, razaoSocial || null]
            );
            console.log('Pessoa jurídica cadastrada ID:', result.insertId);
            return res.status(200).json({message: 'Pessoa jurídica cadastrada com sucesso.'});
        }
        return res.status(400).json({message: 'Tipo inválido.'});
    
    }catch (error){
        console.error('Erro ao cadastrar:', error);
        return res.status(500).json({message: 'Erro interno ao salvar no banco de dados.'});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});