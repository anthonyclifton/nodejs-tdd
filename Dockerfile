FROM node:13

WORKDIR /

COPY package.json ./
RUN npm install yarn --global
RUN yarn install

COPY . .
EXPOSE 8081
CMD [ "yarn", "start" ]