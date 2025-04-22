FROM node:20-alpine AS build

WORKDIR /app

# Copia apenas os arquivos essenciais para instalar as dependências primeiro
COPY frontend/package.json frontend/package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para dentro do container
COPY frontend .

# Gera o build da aplicação
RUN npm run build

# Etapa 2: Servindo o build com Nginx
FROM nginx:alpine

# Remove configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Adiciona configuração nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o build gerado na etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Expondo a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
