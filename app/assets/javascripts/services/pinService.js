
Board.factory('pinService',
  ['Restangular',

    function(Restangular) {

      var all = function() {
        return Restangular.all('pins').getList();
      }

      return {
        all:all
      };

    }

]);
