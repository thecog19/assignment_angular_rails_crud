
Board.factory('pinService',
  ['Restangular',

    function(Restangular) {

      var transactionOptions = ['buy', 'sell'];

      var all = function() {
        return Restangular.all('pins').getList();
      };

      var create = function(params) {
        return Restangular.all('pins').post({
          pin: {
            item_name: params.itemName,
            transaction_type: params.transactionType,
            description: params.description
          }
        })
        .then(all);
      };

      Restangular.extendCollection('pins', function(collection) {
        collection.create = create;
        return collection;
      });

      var edit = function(pin){
        return pin.put()
        //.then(function(response){
          //console.log(response);
        //});
      };

      Restangular.extendModel('pins', function(model){

        model.edit = function(pinParams) {
          model.item_name = pinParams.itemName;
          model.transaction_type = pinParams.transactionType;
          model.description = pinParams.description;
          edit(model);
        };

        return model;
      });

      var find = function(id){
        return Restangular.one('pins', id).get();
      };

      var getTransactOpts = function() {
        return transactionOptions;
      };

      return {
        all:all,
        getTransactOpts: getTransactOpts,
        find: find
      };

    }

]);
