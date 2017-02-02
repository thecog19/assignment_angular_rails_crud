
Board.controller('pinsIndexCtrl',
  ['$scope', 'pinService',

    function($scope, pinService) {

      $scope.pins = [];

      var _updatePins = function(pins) {
        angular.copy(pins, $scope.pins);
      };

      pinService.all().then(function(pins) {
        _updatePins(pins);
      });

      $scope.pinParams = {};

      $scope.transactionOptions = pinService.getTransactOpts();

      $scope.createPin = function() {
        $scope.pins.create($scope.pinParams);
        _updatePins(pins);
console.log($scope.pinParams);
      }

    }

]);
