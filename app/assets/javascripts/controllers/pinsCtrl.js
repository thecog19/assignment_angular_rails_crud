
Board.controller('pinsIndexCtrl',
  ['$scope', 'pinService',

    function($scope, pinService) {

      var _updatePins = function(pins) {
        angular.copy(pins, $scope.pins);
      };

      pinService.all().then(function(pins) {
        $scope.pins = pins;
      });

      $scope.pinParams = {};

      $scope.transactionOptions = pinService.getTransactOpts();

      $scope.createPin = function() {
        $scope.pins.create($scope.pinParams)
              .then(function(response) {
                _updatePins(response)
                $scope.pinParams = {};
              });
      };

    }

]);
