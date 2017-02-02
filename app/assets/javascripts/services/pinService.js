
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

      var find = function(id){
        return Restangular.one("pins", id).get();
      };

      Restangular.extendCollection('pins', function(collection) {
        collection.create = create;
        return collection;
      });

      var getTransactOpts = function() {
        return transactionOptions;
      };

      return {
        all:all,
        create: create,
        getTransactOpts: getTransactOpts,
        find: find
      };

    }

]);
