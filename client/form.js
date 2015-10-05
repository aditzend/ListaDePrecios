Template.form.events({
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
      estado: 'BLOQUEADO',
      createdAt: new Date()
    });


    // mostrar variables
    console.log(nombre);
    console.log(sitio);
    console.log(correo);
    console.log(telefono);
    console.log(estaAbierta);

    // si esta todo ok
    Router.go('gracias');
    //Session.set ('usuario', nombre);

    

    
    // mandrill
    var managerContent = {
      managerName : "Sol",
      distName : nombre,
      distMail : correo,
      distWeb : sitio,
      distPhone : telefono,
      distIsOpen : estaAbierta,


    };

    var managerEmail = {
      receiver: "ad@alexanderditzend.com",
      template: "newDistributorNotification"
    };


    var distributorContent = {
      userName: nombre
    };

    var distributorEmail = {
      receiver: correo,
      template: 'distributorFirstMail'
    };
    // fin madrill

    //enviar el mail
    Meteor.call('sendDistributorEmail',distributorEmail,distributorContent);
    Meteor.call('sendManagerEmail',managerEmail,managerContent);

    


  }
});




 


