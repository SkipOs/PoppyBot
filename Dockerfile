# Usa a imagem oficial do Node (leve e estável)
FROM node:22-slim

-v /run/podman/podman.sock:/run/podman/podman.sock
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
ENV NODE_ENV=production

# Comando padrão ao iniciar o container
CMD ["node", "index.js"]
