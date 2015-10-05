Template.distributorCard.events({
	'click .mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect.green': function (event) {
		console.log(this.estado);
		console.log(this.nombre);
		Distributors.update(this._id, {
			$set: {estado: 'AUTORIZADO'}
		});
	},

	'click .mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect.red': function (event) {
		console.log(this.estado);
		console.log(this.nombre);
		Distributors.update(this._id, {
			$set: {estado: 'DENEGADO'}
		});
	}
})
