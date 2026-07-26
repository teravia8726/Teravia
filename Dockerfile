FROM php:8.2-apache

COPY . /var/www/html/

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html

RUN printf '#!/bin/bash\n\
set -e\n\
a2dismod mpm_event mpm_worker mpm_prefork || true\n\
a2enmod mpm_prefork rewrite\n\
exec apache2-foreground\n' > /usr/local/bin/start-apache.sh \
&& chmod +x /usr/local/bin/start-apache.sh

EXPOSE 80

CMD ["start-apache.sh"]
