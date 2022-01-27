FROM node:16-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 4100

CMD [ "yarn", "dev" ]