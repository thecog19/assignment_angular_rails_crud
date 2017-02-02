
Board.controller('pinsEditCtrl',
  ['$scope', '$stateParams', 'pinService',

  function($scope, $stateParams, pinService) {

    pinService.find($stateParams.id)
      .then(function(pin) {
        $scope.pin = pin;
        $scope.pinParams = {
          itemName: $scope.pin.item_name,
          description: $scope.pin.description,
          transactionType:  $scope.pin.transactionType
        }
      });
    $scope.transactionOptions = pinService.getTransactOpts();

    $scope.pinParams = {};

     var _updatePin = function(pin) {
        angular.copy(pin, $scope.pin);
      };

    $scope.editPin = function(pinForm) {
        if (!pinForm.$valid) return;
        $scope.pin.edit($scope.pinParams)
              .then(function(response) {
                _updatePin(response)
                $scope.pinParams = {};
              });
      };
  }

]);
