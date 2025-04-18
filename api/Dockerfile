# Dockerfile do Backend (NestJS)
FROM node:20

WORKDIR /app

# Instalar cliente MySQL
RUN apt-get update && apt-get install -y mariadb-client

# Copia os arquivos essenciais primeiro
COPY api/package.json api/package-lock.json ./

# Instala as dependências
RUN npm install

# Copia todo o código da aplicação
COPY api .

# Executa o generate do prisma
RUN npx prisma generate

# Executa a build
RUN npm run build

# Exponha a porta da API
EXPOSE 3000

# Executa o script ao iniciar o container
CMD ["sh","-c","npx prisma migrate deploy && npm run prisma:seed && npm run start:prod"]
