# API de Autenticação utilizando RBAC

- [Sobre](#about)
- [Tecnologias](#tech)
- [Como Utilizar](#settings)

<a id="about"></a>
## Sobre

<a id="tech"></a>

Este repositório foi criado para demonstrar como funciona o conceito de Role Based Control Access para os alunos do curso DEVinHouse.
## Tecnologias

O projeto desenvolvido utiliza as seguintes tecnologias:
- [NodeJS](https://nodejs.org/en/) 
- [Express](https://expressjs.com/)
- [Swagger](https://swagger.io/)
- [Swagger-Autogen](https://github.com/davibaltar/swagger-autogen/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)

<a id="settings"></a>

# Como Utilizar

### **Pré-requisitos**

  - Possuir o NodeJS e o Postgres instalado na sua máquina.

```bash
# Clone o Repositório
$ git clone https://github.com/pedrohbsilva/aulas_sequelize.git
```

```bash
# Entre na pasta projeto
$ cd aulas_sequelize

```
```bash
# Já dentro da pasta do projeto.
# Instale as bibliotecas utlizadas no projeto.
$ yarn ou npm install
```
```bash
# Criar o Database utilizando o Sequelize
$ yarn sequelize db:create 
```
```bash
# Criar um arquivo .env a partir do arquivo .env.sample
$ DATABASE_URL=postgresql://user:password@host:port/database
$ SECRET=senha secreta
```
```bash
# Para popular as tabelas no postgres
$ yarn sequelize db:migrate
```
```bash
# Executar o programa.
$ yarn dev
```
```bash
# Enquanto estiver executando o sistema localmente, para acessar o swagger, acesse a url.
$ localhost:3333/api-docs
```
```bash
# Para gerar novas atualizações no arquivo swagger_output.json, deve ter alterações nos endpoints inseridos no src/routes/index.js e execute o comando
$ yarn swagger
```