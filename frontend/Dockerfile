# Use uma imagem base que tenha Node.js instalado
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte do frontend para o diretório de trabalho
COPY . .

# Exponha a porta 3000 para que possa ser acessada fora do contêiner
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["npm", "run", "dev"]