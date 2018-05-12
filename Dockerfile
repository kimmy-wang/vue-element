# Using a compact OS
FROM node:9.11.1-slim

#author info
LABEL maintainer="YING WANG <864891814@qq.com>"

# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service

# Bundle app source
COPY . /home/Service

RUN npm install
RUN npm run build

ENV PORT 2000
EXPOSE 2000

#
CMD [ "npm", "run", "prod", "daemon off;"]
