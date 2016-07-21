# Base ubuntu env
# daocloud.io/sailxjx/storyship

FROM ubuntu:16.04
MAINTAINER Xu Jingxin http://jingxin.me

RUN apt-get update -qq \
 && apt-get upgrade -y -qq \
 && apt-get install apt-utils make wget curl -y -qq
