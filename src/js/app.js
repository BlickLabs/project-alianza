$('form[name="alianza-contact-form"]').validate({
  // required fields
  name: 'required',
  phone: 'required',
  email: 'required',
  message: 'required',
  messages: {
   name: "Por favor, introduce tu Nombre",
   phone: 'Por favor, introduce tu Teléfono',
    email: 'Por favor introduce un Correo Electrónico',
    message: 'Por favor introduce tu Mensaje',
  }
});