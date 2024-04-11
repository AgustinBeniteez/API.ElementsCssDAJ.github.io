// En este ejemplo, se devuelve un CSS estático, pero puedes leerlo desde un archivo si lo deseas
exports.getCSS = (req, res) => {
    const css = `
      button[element="1"] {
        /* Estilos CSS para el botón con element="1" */
      }
    `;
    res.send(css);
  };
  