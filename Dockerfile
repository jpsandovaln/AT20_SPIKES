FROM node:18-alpine

RUN apk update 

RUN apk add --update --no-cache build-base nodejs npm
RUN apk add --no-cache openjdk7
RUN apk add --no-cache openjdk8
RUN apk add --no-cache openjdk11
RUN apk add --no-cache openjdk17
RUN apk add --no-cache python3 py3-pip

RUN apk add --no-cache mono --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing && \
    apk add --no-cache --virtual=.build-dependencies ca-certificates && \
    cert-sync /etc/ssl/certs/ca-certificates.crt && \
    apk del .build-dependencies

RUN mkdir -p /urs/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]
