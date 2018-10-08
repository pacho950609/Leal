
## Documentacion

Se hizo uso del framework angular, por lo tanto sera necesario tener instalado (node, npm y angular-cli),
para instalar angular-cli es importante correr npm install -g @angular/cli y NO npm install -g ng-cli

Para ejecutar el proyecto se debera :

- Clonar o descargar el proyecto

- Correr el comando npm i

- Correr el comando npm start

- Correr en el navegador localhost:4200

Como alternativa se podria usar la carpeta dist para la ejecucion del proyecto

## Estructura

Se crearon 2 modulos principales

-Autenticacion : tiene el componente de login el cual una vez es iniciada sesion agrega el token de autenticacion como cookie
y por lo tanto se podra cerrar, abrir la aplicacion y moverme entre pestañas sin ser necesario volver a logearse.

-Transacciones : esta conformado por 2 componentes :
  -filtro : contiene los filtros que se pueden aplicar a las transacciones
  -transacciones : contiene la lista de transacciones que se mostrara en la aplicacion
  
Adicionalmente hay una carpeta de servicios la cual es encargada de conectarse al web api y consuminar los servicios

Finalmente hay una carpeta de modelo la cual contiene el modelos de todas las entidades de la aplicacion (transacciones)
