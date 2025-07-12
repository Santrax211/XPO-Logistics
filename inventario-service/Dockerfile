# Dockerfile en inventario/
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install --production

# Copiamos el resto del código
COPY . .

# Puerto interno en el que escucha tu app
ENV PORT=${PORT}

# Exponemos el puerto
EXPOSE ${PORT}

# Comando para arrancar
CMD ["node", "server.js"]