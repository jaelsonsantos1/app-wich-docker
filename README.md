# **CRUD de Usuários com Next.js e PostgreSQL**

Este projeto é uma aplicação simples de cadastro de usuários (CRUD) construída com **Next.js**, utilizando **PostgreSQL** como banco de dados e totalmente containerizada com Docker. O objetivo é demonstrar uma estrutura organizada para um backend integrado ao frontend.

---

## **Sumário**
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## **Tecnologias**
- **Frontend/Backend**: [Next.js](https://nextjs.org/)
- **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Containerização**: [Docker](https://www.docker.com/)

---

## **Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (v18+ recomendado)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## **Estrutura do Projeto**
```
crud-users/
├── prisma/                     # Arquivos do Prisma ORM
│   ├── schema.prisma           # Esquema do banco de dados
├── src/
│   ├── api/                    # Funções para acesso ao banco
│   │   ├── users.js            # Funções CRUD para usuários
│   ├── controllers/            # Controladores da API
│   │   ├── usersController.js  # Lógica para cada rota de usuários
├── pages/
│   ├── api/
│   │   ├── users/
│   │   │   ├── index.js        # Rota principal (GET/POST usuários)
│   │   │   ├── [id].js         # Rota para operações com um único usuário
│   ├── index.js                # Página inicial (lista usuários)
├── .env                        # Variáveis de ambiente
├── docker-compose.yml          # Configuração do Docker Compose
├── Dockerfile                  # Configuração do Docker
├── package.json                # Dependências do projeto
├── README.md                   # Documentação
```

---

## **Configuração do Ambiente**

1. **Configurar o Banco de Dados**
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```env
     DATABASE_URL=postgresql://postgres:password@db:5432/app_wich_docker
     NEXT_PUBLIC_API_URL=http://localhost:3000
     ```

2. **Gerar o Cliente do Prisma**
   - Após configurar o `.env`, execute:
     ```bash
     npx prisma generate
     ```

---

## **Como Rodar o Projeto**

1. **Subir os Contêineres**
   Execute o comando abaixo para inicializar a aplicação e o banco de dados:
   ```bash
   docker-compose up --build
   ```

2. **Acessar a Aplicação**
   - Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)
   - A API estará disponível em: [http://localhost:3000/api/users](http://localhost:3000/api/users)

3. **Executar Migrações**
   - Gere a estrutura do banco de dados com:
     ```bash
     npx prisma migrate dev
     ```

---

## **Endpoints da API**

### **1. Listar Todos os Usuários**
- **Rota**: `GET /api/users`
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  ]
  ```

### **2. Criar Usuário**
- **Rota**: `POST /api/users`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

### **3. Buscar Usuário por ID**
- **Rota**: `GET /api/users/:id`
- **Resposta**:
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

### **4. Atualizar Usuário**
- **Rota**: `PUT /api/users/:id`
- **Body**:
  ```json
  {
    "name": "John Smith",
    "email": "john.smith@example.com"
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 1,
    "name": "John Smith",
    "email": "john.smith@example.com"
  }
  ```

### **5. Deletar Usuário**
- **Rota**: `DELETE /api/users/:id`
- **Resposta**:
  ```json
  {}
  ```

---

## **Contribuição**
1. Faça um fork deste repositório.
2. Crie uma branch com sua feature ou correção: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Envie a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## **Licença**
Este projeto é licenciado sob a [MIT License](LICENSE).

---

Com essa documentação, o projeto está pronto para ser entendido e utilizado por outras pessoas ou equipes! 🚀
