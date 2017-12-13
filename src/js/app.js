
$('form[name="alianza-contact-form"]').validate({
  // required fields
  name: 'required',
  phone: 'required',
  email: 'required',
  message: 'required',
  messages: {
   name: "Por favor, introduce tu Nombre.",
   phone: "Por favor, introduce tu Teléfono.",
   email: "Por favor, introduce un Correo Electrónico.",
   message: "Por favor, introduce tu Mensaje",
  },
  submitHandler: function(form) {
   var data = $('form[name="alianza-contact-form"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/alianza/contact/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Correo enviado, gracias por contactarte con nosotros.");
       $('form[name="alianza-contact-form"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});
