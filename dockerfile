# Usa a imagem oficial do Node (leve e estável)
FROM node:22-slim

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN apt-get update && apt-get install -y podman-cli && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV=production

# Comando padrão ao iniciar o container
CMD ["node", "index.js"]