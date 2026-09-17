# Proyecto Integrador — Módulo 6: Node.js y Express

Aplicación backend inicial desarrollada para la entrega del **Módulo 6**. Demuestra la creación y organización de un servidor con Node.js y Express, rutas públicas, contenido estático y persistencia básica mediante un archivo de logs.

## Objetivo

Construir una base modular y escalable para una futura aplicación de gestión de usuarios y datos. Esta primera etapa permite servir contenido web, exponer una ruta de estado y registrar accesos con el módulo nativo `fs` de Node.js.

## Tecnologías

- Node.js 18 o superior
- Express 4
- dotenv
- nodemon (dependencia de desarrollo)

## Estructura del proyecto

```text
proyecto-modulo-6-node-express/
├── controllers/
│   └── homeController.js
├── logs/
│   └── log.txt
├── middlewares/
│   └── loggerMiddleware.js
├── public/
│   ├── index.html
│   └── styles.css
├── routes/
│   └── index.js
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

La estructura separa responsabilidades: las rutas definen los endpoints, los controladores construyen las respuestas y el middleware concentra el registro de accesos. Esto facilita incorporar servicios, modelos, autenticación JWT y una base de datos en los módulos posteriores.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/starkdotwav/proyecto-modulo-6-node-express.git
cd proyecto-modulo-6-node-express
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

En Windows puedes crear el archivo manualmente y copiar el contenido de `.env.example`.

4. Ejecutar el proyecto en desarrollo:

```bash
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor con Node.js. Se usa para una ejecución normal o de producción. |
| `npm run dev` | Inicia el servidor con nodemon, que lo reinicia automáticamente al detectar cambios. Se usa durante el desarrollo. |

Se eligió `index.js` como archivo principal por ser una convención clara y frecuente para el punto de entrada de una aplicación Node.js pequeña. A medida que la aplicación crezca, este archivo seguirá siendo el lugar donde se integra la configuración global del servidor.

## Rutas disponibles

| Método | Ruta | Tipo de respuesta | Descripción |
| --- | --- | --- | --- |
| GET | `/` | HTML | Página principal dinámica servida desde un controlador. |
| GET | `/status` | JSON | Estado operativo y datos básicos del servidor. |
| GET | `/info` | JSON | Información de tecnologías y persistencia utilizada. |
| GET | `/index.html` | HTML estático | Página estática servida desde `public` mediante `express.static()`. |

## Persistencia en archivo plano

El middleware `loggerMiddleware` utiliza `fs.appendFile()` para agregar una línea por cada solicitud recibida. Se ejecuta antes de `express.static()`, por lo que registra tanto las rutas dinámicas como los recursos estáticos, por ejemplo `/index.html` y `/styles.css`. Cada registro incluye fecha, hora, método HTTP y ruta accedida. El archivo se encuentra en `logs/log.txt` e incluye tres accesos iniciales simulados para evidenciar el funcionamiento requerido.

Ejemplo de registro:

```text
17/09/2026 18:31:00 - Ruta accedida: GET /status
```

## Decisiones técnicas

- **Express** permite definir rutas y middlewares de manera simple sobre Node.js, reduciendo código repetitivo del servidor HTTP nativo.
- **`public/`** centraliza recursos estáticos y se publica con `express.static()`, separándolos de la lógica backend.
- **Controladores y rutas** se mantienen separados para que cada componente tenga una responsabilidad concreta.
- **Logs en archivo plano** cubren la persistencia simple solicitada sin incorporar todavía una base de datos; el enfoque se reemplazará o complementará con una base de datos en los próximos módulos.
- **Variables de entorno** evitan fijar el puerto directamente en el código y preparan el proyecto para configuraciones por ambiente.

## Próximas etapas

En los módulos siguientes esta base se ampliará con PostgreSQL o MongoDB, un ORM, operaciones CRUD, autenticación JWT, rutas privadas y carga validada de archivos.

## Autor

Marcel Navarrete Monrroy
