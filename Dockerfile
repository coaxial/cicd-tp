FROM node:22-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
