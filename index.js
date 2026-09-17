require('dotenv').config();

const express = require('express');
const path = require('path');
const routes = require('./routes');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Permite recibir cuerpos JSON en futuras rutas de la aplicación.
app.use(express.json());

// Registra todas las solicitudes, incluidas las de recursos estáticos.
app.use(loggerMiddleware);

// Expone archivos estáticos como HTML y CSS desde la carpeta public.
app.use(express.static(path.join(__dirname, 'public')));

// Centraliza las rutas públicas del servidor.
app.use('/', routes);

// Respuesta consistente para rutas que no existen.
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Ruta no encontrada'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
