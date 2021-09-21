FROM node

WORKDIR /app
ADD trace.mjs /app
ADD client.mjs /app

ENTRYPOINT ["node", "client.mjs"]
