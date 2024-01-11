# Auth.Js
 Sistema de Autenticación con Next Auth usando la V5 ( Auth.Js) 

## Características
- Manejo del formulario usando React Hook Form y Zod
- Uso de Componentes de UI de Shadcn UI y Radix UI para mejorar la usabilidad
- Sistema de Autenticación con Next Auth
- Manejo de la base de datos con Prisma
- Seguridad basada en JWT
- Configuración de variables de entorno
- Vistas de Login y Register con Tailwind CSS
- Manejo de errores
- Cierre de sesión
- Configurado el doble factor de autenticación
- Configurado el reenvío de correo para validar la cuenta de correo
- Configurado el metodo de recuperar contraseña
- Implementado el servicio de Roles de usuario
- Uso de Server Actions para la autenticación


## Tecnologías Utilizadas

- Next.js 14
- Tailwind CSS
- TypeScript
- Next Auth
- Prisma
- React Hook Form
- Zod
- Shadcn UI
- Radix UI
- bcrypt

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js 20+
- pnpm

## Levantar el proyecto localmente
- Instalar los modulos usando `pnpm install`
- Correr el contenedor de docker `docker compose up -d`
- Correr el servidor `pnpm dev`
- Visitar http://localhost:3000


## Configuración

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio: `git clone <URL DEL REPOSITORIO>`
2. Navega al directorio del proyecto: `cd <NOMBRE DEL PROYECTO>`
3. Instala las dependencias: `pnpm install`
4. Configura las variables de entorno en un archivo `.env` siguiendo el archivo `.env.example`.



## Contribución

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Crea un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m 'Agrega una nueva funcionalidad'`
4. Haz push a tu rama: `git push origin nueva-funcionalidad`
5. Abre una Pull Request en este repositorio.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes leer el archivo de licencia [aquí](LICENSE).