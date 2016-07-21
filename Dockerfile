# Base ubuntu env
# daocloud.io/sailxjx/storyship

FROM node:6.3
MAINTAINER Xu Jingxin http://jingxin.me

WORKDIR /app

COPY server.js /app/
