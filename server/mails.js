if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    sendDistributorEmail: function (email,content) {
      Mandrill.messages.sendTemplate ({
        "template_name": email.template,
        "template_content": [
        {}
        ],
        "message": {
          "global_merge_vars": [
            {
              // name is the name you gave the variable in your template
              "name": "userName",
              "content": content.userName
            },
            {
              // name is the name you gave the variable in your template
              "name": "fromName",
              "content": "Amazónica - Distribuidores"
            },

          ],

          // Merge vars are per recipient and only needed when you send out
          // one email to multiple users
          "merge_vars": [
            {}
          ],
          "to": [
            {"email": email.receiver}
          ]
        }
      });
    }, // sendDistributorEmail

    sendManagerEmail: function (email,content) {
      Mandrill.messages.sendTemplate ({
        "template_name": email.template,
        "template_content": [
        {}
        ],
        "message": {
          "global_merge_vars": [
            {
              // name is the name you gave the variable in your template
              "name": "managerName",
              "content": content.managerName
            },
            {
              "name": "distName",
              "content": content.distName
            },
            {
              "name": "distWeb",
              "content": content.distWeb
            },
            {
              "name": "distMail",
              "content": content.distMail
            },
            {
              "name": "distPhone",
              "content": content.distPhone
            },
            {
              "name": "distIsOpen",
              "content": content.distIsOpen
            },
            

          ],

          // Merge vars are per recipient and only needed when you send out
          // one email to multiple users
          "merge_vars": [
            {}
          ],
          "to": [
            {"email": email.receiver}
          ]
        }
      });
    }

  }); // Methods
    
} // isServer