# Fincheck Api

É uma api que serve para controle financeiro, tendo Authentication e o usuário consegue cadastrar suas contas bancárias, reportar seus gastos mensais divididos em categorias como Lazer, Comida, etc.
Foi feita usando a arquitetura MVC com uma camada extra de DAO para nāo ficar dependente do Prisma ORM.

## Instruções

Rodar o comando:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
Criar um arquivo .env com uma DATABASE_URL postgres.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Testar os endpoints no Insomnia ou Postman com a base_url [http://localhost:3000](http://localhost:3000).

## Requisitos

```
- Node JS lts
```

## Esse projeto utiliza:

```
- Nestjs
- JWT (para autenticaçāo e autorizaçāo)
- Prisma
- Class Validator para os DTOs
- Typescript
- Bycript
```
