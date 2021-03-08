FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive 
RUN apt-get update \
    && apt-get install -y locales nodejs npm ffmpeg
WORKDIR /app
COPY . /app
RUN npm install
CMD ["nodejs","src/index.js"]
