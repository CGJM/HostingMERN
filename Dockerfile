FROM node:12

WORKDIR /var/dockerimage/app

COPY package*.json ./

RUN npm install

COPY . .
CMD ["npm","start"]
