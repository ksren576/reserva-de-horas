function obtenerValor(id) {
  return document.getElementById(id).value;
}

function validar() {
  try {
    let rut, nombre, apellido, edad, correo, especialidad, fecha, hora;
    rut = obtenerValor("rut");
    nombre = obtenerValor("nombre");
    apellido = obtenerValor("apellido");
    edad = obtenerValor("edad");
    correo = obtenerValor("correo");
    especialidad = obtenerValor("especialidad");
    fecha = obtenerValor("fecha");
    hora = obtenerValor("hora");

    let mensaje = "";

    if (rut.length > 0) {
      const regex = /\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
      const esValido = regex.test(rut);
      if (!esValido) mensaje += "El rut ingresado no es válido\n";
    } else {
        mensaje += "El campo rut es obligatorio\n";
    }

    if (nombre.length > 0) {
        const regex = /^[a-zA-ZÑÁÉÍÓÚñáéíóú ]*$/;
        const esValido = regex.test(nombre);
        if (!esValido) mensaje += "El nombre ingresado no es válido\n";
    } else {
        mensaje += "El campo nombre es obligatorio\n";
    }

    if (apellido.length > 0) {
        const regex = /^[a-zA-ZÑÁÉÍÓÚñáéíóú ]*$/;
        const esValido = regex.test(apellido);
        if (!esValido) mensaje += "El apellido ingresado no es válido\n";
    } else {
        mensaje += "El campo apellido es obligatorio\n";
    }

    if (edad.length > 0) {
        const regex = /^\d+$/;
        const esValido = regex.test(edad);
        if (!esValido) mensaje += "La edad ingresada no es válida\n";
    } else {
        mensaje += "El campo edad es obligatorio\n";
    }

    if (correo.length > 0) {
        const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        const esValido = regex.test(correo);
        if (!esValido) mensaje += "El correo ingresado no es válido\n";
    } else {
        mensaje += "El campo correo es obligatorio\n";
    }

    if (!especialidad) mensaje += "El campo especialidad es obligatorio\n";

    if (fecha.length > 0) {
        const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        const esValido = regex.test(fecha);
        if (!esValido) mensaje += "La fecha ingresada no es válida\n";
    } else {
        mensaje += "El campo fecha es obligatorio\n";
    }

    if (!hora) mensaje += "El campo hora es obligatorio\n";
    

    if (mensaje) alert(mensaje);
    else document.getElementById('reservacion').innerHTML = `
    <p>Estimado(a) ${nombre} ${apellido}, su hora para ${especialidad} ha sido reservada para el
    día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita.
    Gracias por preferirnos.
    </p>
    `
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
