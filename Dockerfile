FROM php:8.2-apache

RUN echo "=== APACHE MPM CHECK ===" && \
    ls -la /etc/apache2/mods-enabled | grep mpm || true && \
    echo "=== APACHE MODULE CHECK ===" && \
    apache2ctl -M 2>&1 | grep mpm || true

RUN a2dismod mpm_event || true
RUN a2dismod mpm_worker || true
RUN a2dismod mpm_prefork || true

RUN a2enmod mpm_prefork rewrite

RUN echo "=== AFTER FIX ===" && \
    apache2ctl -M 2>&1 | grep mpm || true

COPY . /var/www/html/

WORKDIR /var/www/html/

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]
