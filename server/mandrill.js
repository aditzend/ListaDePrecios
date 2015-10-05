// Configure the package on the server
Meteor.startup(function() {
    return Mandrill.config({
        username: "pross888@gmail.com",
        key: "rXeASZxSdAeY2cwlVPN8sw"
    });
});