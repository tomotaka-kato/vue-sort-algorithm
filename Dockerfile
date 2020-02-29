FROM node:13.8-slim

COPY . /app

WORKDIR /app

CMD [ "npm", "run", "dev" ]
