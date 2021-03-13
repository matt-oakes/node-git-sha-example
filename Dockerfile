FROM node:14-slim

ARG CAPROVER_GIT_COMMIT_SHA

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
COPY index.js .

RUN npm install

RUN echo $CAPROVER_GIT_COMMIT_SHA > /usr/src/app/GIT_SHA

CMD CAPROVER_GIT_COMMIT_SHA=$(cat /usr/src/app/GIT_SHA) npm start
