FROM php:8.2-apache

RUN echo "=== CHECK MPM BEFORE ===" && \
    apache2ctl -M | grep mpm || true && \
    echo "=== ENABLED MODULES ===" && \
    ls -la /etc/apache2/mods-enabled/

RUN a2dismod mpm_event mpm_worker mpm_prefork || true

RUN a2enmod mpm_prefork rewrite

RUN echo "=== CHECK MPM AFTER ===" && \
    apache2ctl -M | grep mpm || true

COPY . /var/www/html/

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]
