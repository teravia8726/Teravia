FROM php:8.2-apache

RUN rm -f /etc/apache2/mods-enabled/mpm_event.load \
           /etc/apache2/mods-enabled/mpm_event.conf \
           /etc/apache2/mods-enabled/mpm_worker.load \
           /etc/apache2/mods-enabled/mpm_worker.conf \
           /etc/apache2/mods-enabled/mpm_prefork.load \
           /etc/apache2/mods-enabled/mpm_prefork.conf

RUN a2enmod mpm_prefork rewrite

COPY . /var/www/html/

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]
