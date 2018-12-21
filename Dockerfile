# Setting the base to nodejs 8.7.0
FROM node:8.14.1-alpine@sha256:cdeb53db7bab150fae433e853c629766eb469257ebac15051a924eaa8d45e85f

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