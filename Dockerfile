# Usa la imagen oficial de Node.js como la base
FROM node:16 AS builder

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json e package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN ng build --prod --source-map=false --output-path=/app/dist/e-porra

# Crea una imagen ligera de producción con Nginx
FROM nginx:alpine

# Copia los archivos construidos de la aplicación Angular en el servidor Nginx
COPY --from=builder /app/dist/e-porra /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación sea accesible desde fuera del contenedor
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]