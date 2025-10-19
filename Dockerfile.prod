# ======================
# Stage 1: Build
# ======================
FROM node:18 AS builder

WORKDIR /app

# Copia apenas os arquivos de dependências
COPY package*.json ./

# Instala as dependências (inclui devDependencies para build)
RUN npm install

# Copia todo o código
COPY . .

# Compila o Admin Panel do Strapi
RUN npm run build

# ======================
# Stage 2: Production
# ======================
FROM node:18 AS runner

WORKDIR /app

# Copia apenas a pasta "build" e "node_modules" do builder
COPY --from=builder /app ./

# Exponha a porta Strapi (padrão 1337)
EXPOSE 1337

# Define a variável de ambiente para Node em produção
ENV NODE_ENV=production

# Comando para iniciar o Strapi
CMD ["npm", "run", "start"]