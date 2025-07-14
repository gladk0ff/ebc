# Stage 0, based on Node.js, to build and compile React
FROM node:lts as node

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci

COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# 1.13
FROM nginx:latest

COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf