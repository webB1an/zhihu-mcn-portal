# docker build -t zhihu/portal .
FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/default.conf
