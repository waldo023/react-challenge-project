FROM node:11

WORKDIR /home/node/application

ADD "./package.json" "/home/node/application/package.jaon"

RUN ["npm", "install"]

CMD ["npm", "start"]