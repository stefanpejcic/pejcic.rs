ARG NODE_VERSION=20.0.0
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

ENV NODE_ENV development
COPY package.json package-lock.json ./
RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]
