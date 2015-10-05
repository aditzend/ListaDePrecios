
  

Template.blockedDistributors.helpers({
  distributorHelper: function(){
  return Distributors.find({estado:'BLOQUEADO'});
  }
});

Template.deniedDistributors.helpers({
  distributorHelper: function(){
  return Distributors.find({estado:'DENEGADO'});
  }
});

Template.authorizedDistributors.helpers({
  distributorHelper: function(){
  return Distributors.find({estado:'AUTORIZADO'});
  }
});

Template.pricelist.helpers({
  products: function () {
    return Products.find();
  },


  priceHelper: function(){
    
  return Prices.find({connEcId: 983});
  }
});

Template.productWithPriceCard.helpers({
  prices: function() {
    
    return Prices.find({connEcId: this.connEcId}).map(function(price){
      return price.price;
    });
  }
})
 


