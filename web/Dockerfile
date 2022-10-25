FROM node:lts-alpine3.16

COPY . /nextapp

WORKDIR /nextapp

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
