// En este ejemplo, se devuelve contenido estático para un botón específico
exports.getButtonContent = (req, res) => {
    const buttonId = req.params.id;
    // Aquí podrías leer el contenido del botón correspondiente a buttonId
    // desde algún tipo de almacenamiento de datos y devolverlo como respuesta
    const buttonContent = `
      <button element="${buttonId}">
        <!-- Contenido del botón ${buttonId}, como un icono -->
      </button>
    `;
    res.send(buttonContent);
  };
  