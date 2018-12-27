# Setting the base to nodejs 8.7.0
FROM node:8.15.0-alpine@sha256:204f9b6ab2ef1264c26d82b060cc4db06328bd2bd5cdd5a937580911b5f3a4dc

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

ENV NODE_ENV production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start