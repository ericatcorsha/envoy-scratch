FROM node

WORKDIR /app
ADD trace.mjs /app
ADD server.mjs /app

ENTRYPOINT ["node", "server.mjs"]
