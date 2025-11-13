FROM node:22-slim

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

# Permite ao container falar com o podman do host
VOLUME ["/run/podman"]
RUN apt-get update && apt-get install -y podman-cli && rm -rf /var/lib/apt/lists/*

CMD ["node", "index.js"]