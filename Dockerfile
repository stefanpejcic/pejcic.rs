
ARG NODE_VERSION=20.0.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
