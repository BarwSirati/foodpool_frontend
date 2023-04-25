FROM node:19.3 as build

WORKDIR /app
COPY package*.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.17.8-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./conf/nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENV VITE_APP_API=https://foodpoolapi.bxdman.com
CMD ["nginx", "-g", "daemon off;"]