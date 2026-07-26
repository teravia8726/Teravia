FROM php:8.2-apache

RUN ls -la /etc/apache2/mods-enabled/

RUN cat /etc/apache2/mods-enabled/*mpm*.load || true

COPY . /var/www/html/

WORKDIR /var/www/html

CMD ["apache2-foreground"]
