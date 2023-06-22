FROM node
# COPY ./package.json /var/www/package.json
COPY . /var/www
RUN npm install
WORKDIR /var/www
EXPOSE 2500
ENTRYPOINT [ "npm","start" ]

