FROM node:20-alpine

LABEL maintainer="Sameer Abbas <sanagsa2028@gmail.com>"

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]