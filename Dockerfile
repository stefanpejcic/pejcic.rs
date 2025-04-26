
ARG NODE_VERSION=20.0.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

USER node

COPY . .

EXPOSE 3000

CMD node src/index.js
