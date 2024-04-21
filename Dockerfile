# Define a imagem base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Expõe a porta em que o servidor do NestJS estará rodando
EXPOSE 3000

# Define o comando para iniciar o servidor do NestJS
CMD [ "npm", "run", "start:prod" ]