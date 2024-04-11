const express = require('express');
const app = express();

// Endpoint para obtener los estilos CSS
app.get('/api/css', (req, res) => {
  // Aquí puedes generar dinámicamente los estilos CSS o devolverlos desde algún archivo
  const css = `
    button[element="1"] {
      /* Estilos para el botón con element="1" */
    }
    /* Agrega más estilos para otros elementos de botón si es necesario */
  `;
  res.send(css);
});

// Endpoint para obtener el contenido de los botones
app.get('/api/buttons', (req, res) => {
  // Aquí puedes devolver el contenido de los botones en formato JSON
  const buttons = [
    {
      element: 1,
      content: '<span class="icon"></span> Botón 1'
    },
    // Agrega más objetos de botón si es necesario
  ];
  res.json(buttons);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor API iniciado en el puerto 3000');
});
