
#  👨‍💻️ Cadastro dev

O projeto é um CRUD básico de contatos de dev's



## 💻️ Tecnologias do projeto

NodeJS - [Documentação](https://nodejs.org/en/)

Prisma(ORM) - [Documentação](https://www.prisma.io/)

Express - [Documentação](https://expressjs.com/pt-br/)



##  📚️ Documentação da API

#### Retorna todos os developers ou um developer específico

```bash
  GET /developers/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Opcional**  |

#### Criar developers

```bash
  POST /developers/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**  |
| `email` | `string` | **Obrigatório**  |

#### Update developers


```bash
  PUT /developers/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**  |
| `name` | `string` | **Obrigatório**  |
| `email` | `string` | **Obrigatório**  |

#### Deleta developers

```bash
  DELETE /developers/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**  |





##  🔥️ Rodando o projeto

Para rodar esse projeto em localhost basta seguir os passos:

### 1- Instalar dependências

```bash
npm install 
```
ou
```bash
yarn
```
### 2 - Criar o arquivo .env

O arquivo .env precisa obrigatóriamente conter a string de conexão ao banco na variável ***DATABASE_URL***

### 3 - Rodar as migrations
```bash
 npx prisma migrate dev
```
ou
```bash
 yarn prisma migrate dev
```

### 4 - Gerar o Prisma Client

```bash
npx prisma generate
```

ou

```bash
yarn prisma generate

```

### 5 - Rodar o servidor de teste

```bash
npm run dev
```

ou

```bash
yarn dev
```
