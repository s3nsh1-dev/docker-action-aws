FROM node:23-alpine

WORKDIR /app

# this is called layer caching
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# COMMANDS:
# docker build -t api .
# docker run -it --rm -p 3000:3000 api