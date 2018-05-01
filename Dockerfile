# Setting the base to nodejs 8.7.0
FROM node:8.7.0-alpine@sha256:9c6fab2e870c3dac999ae2bae0eeb4e4831aa25561da03cadcf736f4ba9f9cca

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