FROM nginx:1.10.1-alpine

ADD dist/ /usr/share/nginx/html
