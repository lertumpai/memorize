FROM node:lts

ENV NODE_ENV=production

# set a directory for the app
WORKDIR /usr/src/memorize-webhook

# copy all the files to the container
COPY package.json /usr/src/memorize-webhook

RUN npm install

COPY . /usr/src/memorize-webhook

# tell the port number the container should expose
EXPOSE 3333

# run the command
CMD ["npm", "run", "start"]
