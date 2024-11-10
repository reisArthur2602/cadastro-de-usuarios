<h1 align="center" style="font-weight: bold;"> Cadastro de usuários 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Primeiros Passos</a>
 
</p>

<p align="center">
    <b>Desenvolvimento de uma aplicação com funções para gerenciamento de usuário</b>
</p>

<h2 id="layout">🎨 Layout</h2>

<p align="center">
    <img src="./public/home.png" alt="Tela de login" width="600px">

</p>

<h2 id="technologies">💻 Tecnologias</h2>

- React
- Next.js
- TypeScript
- Prisma
- TailwindCSS

<h2 id="started">🚀 Primeiros passos</h2>

<h3>Pré-requisitos</h3>

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com/)

<h3>Clone o projeto</h3>

```bash
git clone https://github.com/reisArthur2602/cadastro-de-usuarios
```

<h3>Configure as váriaveis .env </h2>

Use o`.env.example` como referência para criar seu arquivo de configuração `.env` com suas credenciais

```yaml
DATABASE_URL="postgresql://janedoe:mypassword@localhost:5432/mydb"
```

<h3>Rodar o Projeto</h3>

```bash
cd nome-do-projeto
npm install
npx prisma migrate dev
npm run dev
```
