![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

# Collection Store

Simple api for Collection Store

Technologies used:
- Node
- Typescript
- PostgreSQL
- Prisma ORM
- Swagger

## How to run?

- Git clone this repo
- Execute command ```yarn``` or ```npm install```, ff using npm, I recommend deleting the **yarn.lock** file
- Create an **.env** file for the postgresql environment variable see an example [here](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- Execute ```yarn prisma migrate dev``` or ```npm prisma migrate dev``` to run the migrations

## Available commands

- ```yarn dev``` start the server

These commands can be changed in **package.json**

## More details

Images on [Clodinary](https://cloudinary.com/)

DOCS avaible in [here]()


To access some routes and I need to authenticate with Bearer token, see how to do it with Swagger [here](https://mattfrear.com/2018/07/21/add-an-authorization-header-to-your-swagger-ui-with-swashbuckle-revisited/)
