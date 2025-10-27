FROM node:22-alpine

RUN mkdir -p /__w/cicd-tp/cicd-tp
WORKDIR /__w/cicd-tp/cicd-tp

COPY package.json . package-lock.json ./
RUN npm ci

COPY . .
