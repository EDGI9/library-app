FROM node:22-alpine3.19

WORKDIR /app

# Install Git using apk
RUN apk add --no-cache git

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]