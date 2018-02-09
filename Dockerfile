# Using a compact OS
FROM daocloud.io/library/node:6.11.3-slim

#author info
MAINTAINER YING WANG <864891814@qq.com>

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
