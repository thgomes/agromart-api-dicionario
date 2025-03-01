# Builder image
FROM node:16-alpine AS builder

COPY package.json ./app/
COPY yarn.lock ./app/
COPY swagger.json ./app/

WORKDIR /app

RUN yarn install

COPY . .

RUN yarn run build

# Production image
FROM node:16-alpine

COPY package.json ./usr/src/app/
COPY yarn.lock ./usr/src/app/
COPY swagger.json ./usr/src/app/

WORKDIR /usr/src/app

RUN yarn install --prod

COPY --from=builder /app/dist/ ./dist/

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]
