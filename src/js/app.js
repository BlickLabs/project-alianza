$('form[name="alianza-contact-form"]').validate({
  // required fields
  alianzacontactname: 'required',
  alianzacontactphone: 'required',
  alianzacontactemail: 'required',
  alianzacontactmessage: 'required',
  alianzacontactcompany: 'required',
  messages: {
   alianzacontactname: "Por favor, introduce tu Nombre",
   alianzacontactphone: 'Por favor, introduce tu Teléfono',
    alianzacontactemail: 'Por favor introduce un Correo Electrónico',
    alianzacontactmessage: 'Por favor introduce tu Mensaje',
    alianzacontactcompany: 'Por favor selecciona una Opción'
  }
});