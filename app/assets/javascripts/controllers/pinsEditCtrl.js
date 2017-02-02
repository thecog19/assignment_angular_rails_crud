
Board.controller('pinsEditCtrl',
  ['$scope', '$stateParams', 'pinService',

  function($scope, $stateParams, pinService) {

    pinService.find($stateParams.id)
      .then(function(pin) {
        $scope.pin = pin;
      });

    $scope.pinParams = {};

  }

]);
