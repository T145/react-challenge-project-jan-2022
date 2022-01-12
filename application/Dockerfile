FROM node:11

WORKDIR /home/node/application

ADD "./package.json" "/home/node/application/package.json"

RUN ["npm", "i", "-g", "pnpm"]

RUN ["pnpm", "i"]

CMD ["pnpm", "start"]