FROM node:14-slim

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
COPY index.js .

RUN npm install

CMD npm start
