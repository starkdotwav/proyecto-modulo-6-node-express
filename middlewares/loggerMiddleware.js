const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'logs', 'log.txt');

const loggerMiddleware = (req, res, next) => {
  const now = new Date();
  const date = now.toLocaleDateString('es-CL');
  const time = now.toLocaleTimeString('es-CL');
  const logLine = `${date} ${time} - Ruta accedida: ${req.method} ${req.originalUrl}\n`;

  fs.appendFile(logFilePath, logLine, (error) => {
    if (error) {
      console.error('No fue posible registrar el acceso:', error.message);
    }
  });

  next();
};

module.exports = loggerMiddleware;
