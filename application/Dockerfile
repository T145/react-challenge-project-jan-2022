FROM node:16.13.2

WORKDIR /home/node/application

ADD "./package.json" "/home/node/application/package.json"

RUN ["npm", "i", "-g", "pnpm"]

RUN ["pnpm", "i"]

CMD ["pnpm", "start"]