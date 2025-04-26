ARG NODE_VERSION=20.0.0
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

# Make sure to install devDependencies too
ENV NODE_ENV development
COPY package.json package-lock.json ./
RUN npm install

# Now install serve globally
RUN npm i -g serve

# Then copy the rest of your app
COPY . .

# Build the project
RUN npm run build

# After build, set to production (optional cleanup step)
ENV NODE_ENV production

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
