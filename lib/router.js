Router.configure ({
	layoutTemplate: 'layout'
});

Router.route('/form', function () {
  this.render('form');
});

Router.route('/blockedDistributors', function () {
	this.render('blockedDistributors');
});

Router.route('/deniedDistributors', function () {
	this.render('deniedDistributors');
});

Router.route('/authorizedDistributors', function () {
	this.render('authorizedDistributors');
});

Router.route('/login', function () {
	this.render('login');
});

Router.route('/formOk', function () {
	this.render('formOk');
});

Router.route('/pricelist', function () {
	this.render('pricelist');
});

Router.route('/products', function () {
	this.render('products');
});

Router.route('/products/:connEcId', function () {
	this.render('product');
});

