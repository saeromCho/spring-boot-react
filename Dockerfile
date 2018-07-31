# build environment
FROM node:latest as builder
RUN mkdir /usr/app
WORKDIR /usr/app
ENV PATH /usr/app/node_modules/.bin:$PATH
COPY package.json /usr/app/package.json
RUN npm install --silent
COPY . /usr/app
# RUN npm run build
RUN npm install

# production environment
FROM nginx:latest
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx
COPY --from=builder /usr/app/src/html /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]