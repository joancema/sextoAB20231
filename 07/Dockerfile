FROM node
RUN ["apt-get", "update"]
COPY . /VAR/WWW
WORKDIR /VAR/WWW
ENTRYPOINT [ "node", "index.js" ]
