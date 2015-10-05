




Template.pricelist.events({

	'click .tester': function (event) {
		a = Prices.find({connEcId: 943}).fetch();
		console.log(a);

		console.log('id ' + a[0].price)
	}
})