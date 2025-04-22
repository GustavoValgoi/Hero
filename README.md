# HeroFactory

Gerencie de seus heróis.

## Stack utilizada

**Front-end:** React, Redux, Bootstrap, Styled Components

**Back-end:** Node, NestJS

**Banco de Dados:** MySQL

**Container:** Docker, Docker compose

## Referência

- [NestJS](https://docs.nestjs.com/)
- [React + Vite](https://vite.dev/guide/)
- [MySql](https://www.mysql.com/)
- [Docker](https://www.docker.com/)

## Clone o repositório do projeto

```bash
  git clone https://github.com/GustavoValgoi/Hero.git
```

## Variáveis de Ambiente

As variáveis de ambiente (**.env**) devem ser configuradas dentro das pastas **api** e **frontend**, seguindo o **.env.example**. Basta manter as informações ja enviadas.

## Rodando o projeto para desenvolvimento

Certifique-se que o Docker está funcional na máquina e a porta para o banco dados MySQL 3306, esteja disponível.

Dentro do diretório raiz do repositório acesse o terminal e execute o seguinte comando:

```bash
docker-compose up database
```

após executar o comando o docker vai iniciar uma imagem do MySQL 8+, verifique se está rodando o banco de dados com o seguinte comando no terminal:

```bash
docker ps
```

Uma imagem do MySQL deve estar em execução!

Acesse os diretórios do projeto: **api e frontend**, via terminal, instale as dependências, com o comando:

```bash
  npm install
```

### Backend

Rode as migrações com o comando:

```bash
  npx prisma migrate deploy
```

Certifique-se que a porta 3000 está disponível, caso contrário configure uma variável de ambiente chamada **PORT** no **.env da pasta api** com o número da porta que deseja utilizar e inicie o servidor:

```bash
  npm run start:dev
```

para ver a cobertura de testes unitários dentro da pasta **api** execute:

```bash
  npm run test:cov
```

### Frontend

Dentro da pasta **frontend**, verifique dentro do arquivo **.env**, se está apontando para a porta certa, no nosso caso 3000. Via terminal rode o comando:

```bash
  npm run dev
```

## Rodando o projeto e testando no navegador

- Deixe o Docker ativo. Com a porta de banco de dados 3306 disponível.
- Faça um novo clone do repositório em uma pasta limpa.
- Crie os .env nas pastas **api** e **frontend**, como o passo acima "VARIÁVEIS DE AMBIENTE" .
- Pastas como: **node_modules**, **build** e **dist**. Não podem existir dentro de: **api** e **frontend**, caso contrário não vai funcionar!

```bash
  docker-compose up --build --force-recreate
```

após subir o serviço no Docker acesse no navegador:

```http
  http://localhost
```

## Documentação Swagger

Para ver a documentação Swagger com os endpoints, com a **api** rodando acesse no navegador:

```http
  http://localhost:3000/api
```

## 🔗 Links do Desenvolvedor

- Gustavo Valgoi
- Desenvolvedor Full-stack NodeJs.
  [![portfolio](https://img.shields.io/badge/github-000?style=for-the-badge&logoColor=white)](https://github.com/GustavoValgoi/)
  [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gussalmeida)
