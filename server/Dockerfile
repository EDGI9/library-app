FROM node:22-alpine3.19

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 5000

CMD [ "npm","run","start" ]