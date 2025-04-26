
ARG NODE_VERSION=20.0.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD node src/index.js
