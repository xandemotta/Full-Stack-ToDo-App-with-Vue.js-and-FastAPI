FROM node:14-alpine

WORKDIR /frontend

COPY J:/devlinks/backend/frontend/package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
