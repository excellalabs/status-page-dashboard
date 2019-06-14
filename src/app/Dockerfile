FROM node:10

# Create app directory
WORKDIR /app

#COPY application /app
COPY . /app

#Install dependencies
RUN npm install

EXPOSE 4200
CMD [ "npm", "start" ]