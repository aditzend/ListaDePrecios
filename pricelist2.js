
Distributors = new Mongo.Collection('distributors');


if (Meteor.isClient) {
  

  Template.body.helpers({

    distribuidores: function(){
    return Distributors.find();
    }
    
  });

  Template.body.events({
    'submit .send-list': function (event) {
      event.preventDefault();

      var nombre = event.target.nombre.value;
      var sitio = event.target.sitio.value;
      var correo = event.target.correo.value;
      var telefono = event.target.telefono.value;    
      var estaAbierta = event.target.estaAbierta.checked;  

  

      // inserto en la base

      Distributors.insert({
        nombre: nombre,
        sitio: sitio,
        correo: correo,
        telefono: telefono,
        estaAbierta: estaAbierta,
        status: 'BLOCKED',
        createdAt: new Date()
      });


      // mostrar variables
      console.log(nombre);
      console.log(sitio);
      console.log(correo);
      console.log(telefono);
      console.log(estaAbierta);



      //enviar el mail
      //Meteor.call('sendEmail',
      //      'alexanderditzend@icloud.com',
      //      'bob@example.com',
      //      'Hello from Meteor!',
      //      'This is a test of Email.send.');

      


    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    sendEmail: function (to, from, subject, text) {
      check([to, from, subject, text], [String]);

      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();

      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });
    }
  });  

}
