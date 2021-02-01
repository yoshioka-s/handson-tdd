FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run db:migrate

EXPOSE 8000
CMD ["npm", "run", "dev"]
