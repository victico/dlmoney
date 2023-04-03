Para correr el proyecto:
    -php artisan serve
    -npm run watch

* Resetear la base de datos:
- php artisan migrate:fresh
- php artisan db:seed

* Si la base de datos se resetea:
- php artisan passport:install
- Copiar y pegar el client secret N° 2 en:
    - Variables de entorno de POSTMAN
    -.env
- Pegarle al oauth/token o "get access token" y ya esta listo para usar la api
