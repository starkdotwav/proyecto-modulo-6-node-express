const getHome = (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Proyecto Módulo 6</title>
      </head>
      <body>
        <main>
          <h1>Proyecto Módulo 6: Node.js y Express</h1>
          <p>Servidor funcionando correctamente.</p>
          <p>Consulta <a href="/status">/status</a> para ver el estado en formato JSON.</p>
          <p>También puedes visitar el archivo estático <a href="/index.html">/index.html</a>.</p>
        </main>
      </body>
    </html>
  `);
};

const getStatus = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Servidor operativo',
    data: {
      service: 'proyecto-modulo-6-node-express',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    }
  });
};

const getInfo = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Información del proyecto',
    data: {
      module: 'Módulo 6',
      technologies: ['Node.js', 'Express', 'dotenv', 'nodemon'],
      persistence: 'Archivo plano logs/log.txt'
    }
  });
};

module.exports = {
  getHome,
  getStatus,
  getInfo
};
