FROM node:11

RUN ln -fs /usr/share/zoneinfo/US/Pacific-New /etc/localtime && dpkg-reconfigure -f noninteractive tzdata

WORKDIR /home/node/server

ADD "./package.json" "/home/node/server/package.json"

RUN chmod +x prepare.bash && ./prepare.bash

CMD ["pnpm", "start"]
